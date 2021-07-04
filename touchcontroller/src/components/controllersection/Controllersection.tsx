import React, { useEffect, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';

import './Controllersection.css';
import Street from './3d/sctreet';
import Car from './3d/car';
function Controllersection() {


  return (
    <div className="controllersection">
      <Canvas>
        {/* <OrbitControls enableZoom={true} enableRotate={true} target={[0, .4, 0]} autoRotate={false} enableDamping/> */}
        {/* <perspectiveCamera args={[45, ref.current.offsetWidth / ref.current.offsetHeight, 1, 1000]} /> */}
        <ambientLight intensity={0.1} />

        <mesh position={[1, 0, 0]}>
          <boxBufferGeometry />
          <meshPhongMaterial />
        </mesh>

        {/* <Car /> */}

        <Street />
      </Canvas>
    </div>
  );
}

export default Controllersection;
