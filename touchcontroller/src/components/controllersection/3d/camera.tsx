import {OrbitControls} from "@react-three/drei";
import {useThree} from "@react-three/fiber";
import React, {useEffect} from "react";

export default function Camera(params: {locked: boolean}) {
    const s = useThree();

    useEffect(() => {
        s.camera.position.setY(3.5);
        s.camera.position.setZ(-4);
        s.camera.position.setX(0);
    }, [s])

    return (
        <OrbitControls enableZoom={true} enableRotate={!params.locked} target={[0, .3, 0]} autoRotate={false} enableDamping/>
    )
}