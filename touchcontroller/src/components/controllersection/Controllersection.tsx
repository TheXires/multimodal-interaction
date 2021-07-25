import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas, extend, useThree } from '@react-three/fiber';
import { DragControls } from 'three/examples/jsm/controls/DragControls';
import Street from './3d/sctreet';
import OwnCar from './3d/car';
import './Controllersection.css';
import * as THREE from 'three';
import {handleDragEnd, handleDragOngoing} from '../../services/drag.service';

extend({ DragControls });

const ex = new THREE.Mesh(
  new THREE.BoxGeometry(1.1, 1.3, 1.9),
  new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0 }),
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

  // level car on y axis on drag
  useEffect(() => {
    dragControls.current.addEventListener('drag', function (event) {
      event.object.position.y = 0;
      event.object.position.z += event.object.position.z * 0.6;
      car.current.position.x = event.object.position.x;
      car.current.position.z = event.object.position.z;
      handleDragOngoing(car.current.position.x, car.current.position.z);
    });

    // detect drag location and snap car back
    dragControls.current.addEventListener('dragend', function (event) {
      const tolerance = 0.05;

      handleDragEnd(car.current.position.x, car.current.position.z);

      event.object.position.y = 0;
      event.object.position.z = 0;
      event.object.position.x = 0;
      // snap car back to middle
      const i = setInterval(() => {
        const xDistance = 0 - car.current.position.x;
        const zDistance = 0 - car.current.position.z;

        if (Math.abs(car.current.position.x) > tolerance) {
          car.current.position.x += xDistance / 30;
        }
        if (Math.abs(car.current.position.z) > tolerance) {
          car.current.position.z += zDistance / 40;
        }
        if (
          Math.abs(car.current.position.x) < tolerance &&
          Math.abs(car.current.position.z) < tolerance
        ) {
          clearInterval(i);
        }
      }, 5);
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
