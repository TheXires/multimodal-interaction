import React, { Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';

import './Controllersection.css';
import Street from './3d/sctreet';
import OwnCar from './3d/car';
import { useThree } from '@react-three/fiber';

function Scene() {
  const { camera } = useThree();
  useEffect(() => {
    camera.position.set(0, 3.5, -4);
    camera.rotateY(-Math.PI);
    camera.rotateX(-Math.PI * .2);
  }, []);

  return (
    <React.Fragment>
      <color attach="background" args={['#c7c7c7']} />
      <ambientLight />
      <Suspense fallback={null}>
        <OwnCar />
      </Suspense>
      <Street />
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
