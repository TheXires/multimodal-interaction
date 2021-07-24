import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

import './Controllersection.css';
import Street from './3d/sctreet';
import Camera from './3d/camera';
import Vehicles from './3d/vehicles/vehicles';

function Controllersection() {
  return (
    <div className="controllersection">
      <Canvas dpr={[1, 2]} camera={{ fov: 60 }}>
        <color attach="background" args={['#c7c7c7']} />
        <ambientLight />
        <Camera locked={false} />
        <Suspense fallback={null}>
          <Vehicles />
        </Suspense>
        <Street />
      </Canvas>
    </div>
  );
}

export default Controllersection;
