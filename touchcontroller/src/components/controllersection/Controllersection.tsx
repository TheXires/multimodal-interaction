import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

import './Controllersection.css';
import Street from './3d/sctreet';
import Car from './3d/car';
import Camera from './3d/camera';
function Controllersection() {
  return (
    <div className="controllersection">
      <Canvas>
        <Camera locked={false} />
        <ambientLight intensity={0.1} />

        {/* <mesh position={[2, 0, 0]}>
          <boxBufferGeometry />
          <meshPhongMaterial color="red"/>
        </mesh> */}

        <Suspense fallback={loading}>
          <Car rotation={[0, Math.PI, 0]} scale={0.5} position={[1.5, 0, 0]} />
        </Suspense>

        <Street />
      </Canvas>
    </div>
  );
}

export default Controllersection;

function loading() {
  <textBufferGeometry args={['loading']} />;
}
