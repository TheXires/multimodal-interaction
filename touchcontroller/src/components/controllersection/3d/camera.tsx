import {OrbitControls} from "@react-three/drei";
import {useThree} from "@react-three/fiber";
import React, {useEffect} from "react";

const offsetRight = 1.5

export default function Camera(params: {locked: boolean}) {
    const s = useThree();

    useEffect(() => {
        s.camera.position.setY(3);
        s.camera.position.setZ(3);
        s.camera.position.setX(offsetRight);
    }, [s])

    return (
        <OrbitControls enableZoom={true} enableRotate={!params.locked} target={[offsetRight, .4, 0]} autoRotate={false} enableDamping/>
    )
}