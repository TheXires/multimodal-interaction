import React from 'react';

/**
 * Street object of the scene
 */
const Street = (): JSX.Element => {
  const mesh = React.useRef();
  return (
    <mesh ref={mesh} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 40]}>
      <planeGeometry args={[1.7, 100]} />
      <meshPhongMaterial color={'#dbdbdb'} />
    </mesh>
  );
};

export default Street;
