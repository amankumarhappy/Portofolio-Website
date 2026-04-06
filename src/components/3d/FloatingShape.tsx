"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

export default function FloatingShape() {
    const meshRef = useRef<Mesh>(null);

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.2;
            meshRef.current.rotation.y += delta * 0.3;
            meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
        }
    });

    return (
        <mesh ref={meshRef}>
            <icosahedronGeometry args={[2, 0]} />
            <meshStandardMaterial color="#00f3ff" wireframe />
        </mesh>
    );
}
