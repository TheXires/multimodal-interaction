import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas, extend, useThree } from '@react-three/fiber';
import { DragControls } from 'three/examples/jsm/controls/DragControls';
import Street from './3d/sctreet';
import OwnCar from './3d/car';
import './Controllersection.css';
import * as THREE from 'three';

extend({ DragControls });

const ex = new THREE.Mesh(
  new THREE.BoxGeometry(2, 2, 2),
  new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0 }),
  // new THREE.MeshBasicMaterial({ color: 0xffffff }),
);

function Scene() {
  const {
    camera,
    gl: { domElement },
  } = useThree();

  const car = useRef();
  const dragControls = useRef();

  // place camera
  useEffect(() => {
    camera.position.set(0, 3.5, -4);
    camera.rotateY(-Math.PI);
    camera.rotateX(-Math.PI * 0.2);
  }, []);

  // add drag listener
  useEffect(() => {
    dragControls.current.addEventListener('drag', function (event) {
      event.object.position.y = 0;
      event.object.position.z += event.object.position.z * 0.6;
      car.current.position.set(event.object.position.x, car.current.position.y, event.object.position.z)
    });
  }, [dragControls.current]);

  return (
    <React.Fragment>
      <color attach="background" args={['#c7c7c7']} />
      <ambientLight />
      <Suspense fallback={null}>
        <OwnCar ref={car} />
      </Suspense>
      <Street />
      <primitive object={ex} />
      <dragControls ref={dragControls} args={[[ex], camera, domElement]} />
    </React.Fragment>
  );
}

function Controllersection() {
  return (
    <div className="controllersection">
      <Canvas dpr={[1, 2]} camera={{ fov: 60 }}>
        <Scene />
      </Canvas>
    </div>
  );
}

export default Controllersection;
