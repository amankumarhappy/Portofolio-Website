"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Group, Mesh } from "three";

export default function FloatingShape() {
    const groupRef = useRef<Group>(null);
    const headRef = useRef<Mesh>(null);

    useFrame((state, delta) => {
        const t = state.clock.elapsedTime;

        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.18;
            groupRef.current.rotation.x = Math.sin(t * 0.45) * 0.08;
            groupRef.current.position.y = Math.sin(t * 0.9) * 0.12;
        }

        if (headRef.current) {
            headRef.current.rotation.z = Math.sin(t * 0.7) * 0.04;
        }
    });

    return (
        <group ref={groupRef} position={[1.35, -0.05, 0]} scale={0.92}>
            <mesh position={[0, -1.05, 0]} rotation={[0.12, 0, 0]}>
                <capsuleGeometry args={[0.8, 1.55, 8, 18]} />
                <meshStandardMaterial color="#111827" metalness={0.45} roughness={0.28} />
            </mesh>

            <mesh ref={headRef} position={[0, 0.38, 0]}>
                <sphereGeometry args={[0.82, 32, 32]} />
                <meshStandardMaterial color="#f0c7a3" metalness={0.08} roughness={0.42} />
            </mesh>

            <mesh position={[0, 0.98, 0.04]} scale={[0.95, 0.42, 0.72]}>
                <sphereGeometry args={[0.82, 32, 16]} />
                <meshStandardMaterial color="#10131a" metalness={0.2} roughness={0.35} />
            </mesh>

            <mesh position={[-0.78, -0.82, 0]} rotation={[0.1, 0, -0.42]}>
                <capsuleGeometry args={[0.22, 1.12, 8, 14]} />
                <meshStandardMaterial color="#0ea5e9" metalness={0.32} roughness={0.26} />
            </mesh>

            <mesh position={[0.78, -0.82, 0]} rotation={[0.1, 0, 0.42]}>
                <capsuleGeometry args={[0.22, 1.12, 8, 14]} />
                <meshStandardMaterial color="#8b5cf6" metalness={0.32} roughness={0.26} />
            </mesh>

            <mesh position={[0, -1.04, 0.84]}>
                <torusGeometry args={[0.95, 0.025, 12, 96]} />
                <meshStandardMaterial color="#00f3ff" emissive="#00f3ff" emissiveIntensity={0.65} />
            </mesh>

            <mesh position={[0, 0.1, -0.08]} rotation={[1.15, 0, 0]}>
                <torusGeometry args={[1.46, 0.018, 12, 120]} />
                <meshStandardMaterial color="#bc13fe" emissive="#bc13fe" emissiveIntensity={0.45} />
            </mesh>

            <mesh position={[-1.85, 1.15, -0.25]}>
                <octahedronGeometry args={[0.22, 0]} />
                <meshStandardMaterial color="#00f3ff" emissive="#00f3ff" emissiveIntensity={0.75} />
            </mesh>

            <mesh position={[1.7, 0.76, -0.3]}>
                <icosahedronGeometry args={[0.17, 0]} />
                <meshStandardMaterial color="#0aff0a" emissive="#0aff0a" emissiveIntensity={0.55} />
            </mesh>

            <mesh position={[1.42, -1.78, -0.18]}>
                <boxGeometry args={[0.3, 0.3, 0.3]} />
                <meshStandardMaterial color="#facc15" emissive="#facc15" emissiveIntensity={0.4} />
            </mesh>
        </group>
    );
}
