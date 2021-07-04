import React, { useEffect } from 'react';

export default function Street() {
  const mesh = React.useRef();
  useEffect(() => {
    mesh.current.translateY(40);
  }, []);
  return (
    <mesh ref={mesh} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry args={[8, 100]} />
      <meshPhongMaterial />
    </mesh>
  );
}
