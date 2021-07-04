import React from 'react';
import {useLoader} from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';

import * as materials from '../../../assets/Tesla.mtl';
import * as geometry from '../../../assets/Tesla.obj';

const mat = useLoader(MTLLoader, materials.default);
const obj = useLoader(OBJLoader, geometry.default, (loader) => {
  mat.preload();
  (loader as any).setMaterials(mat);
});

export default function Car() {
  return <primitive object={obj} />;
}
