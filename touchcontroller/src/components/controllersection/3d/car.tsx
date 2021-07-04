import React from 'react';
import { useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

import * as geometry from '../../../assets/Tesla.obj';

export default function Car(props: any) {
  const obj = useLoader(OBJLoader, geometry.default);

  return <primitive object={obj} {...props}/>;
}
