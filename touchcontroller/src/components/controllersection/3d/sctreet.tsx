import { useFrame, useThree } from '@react-three/fiber';
import React from 'react';
import { useEffect } from 'react';

export default function Street() {
  const s = useThree();
  const mesh = React.useRef();
  useEffect(() => {
    s.camera.position.setY(2);
    // s.camera.rotation.y = Math.PI /2
    mesh.current.translateY(40);
  }, [s]);
  return (
    <mesh ref={mesh} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry args={[8, 100]} />
      <meshPhongMaterial />
    </mesh>
  );
}
