import React from 'react';

export default function Street(props: any) {
  const mesh = React.useRef();
  return (
    <mesh ref={mesh} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 40]} {...props}>
      <planeGeometry args={[1.7, 100]} />
      <meshPhongMaterial color={"#dbdbdb"} />
    </mesh>
  );
}
