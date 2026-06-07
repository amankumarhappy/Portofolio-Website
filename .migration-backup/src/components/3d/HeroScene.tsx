"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import FloatingShape from "./FloatingShape";

export default function HeroScene() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <Canvas camera={{ position: [0, 0.2, 6], fov: 48 }} dpr={[1, 1.5]}>
                <Suspense fallback={null}>
                    <ambientLight intensity={0.9} />
                    <directionalLight position={[4, 4, 6]} intensity={1.6} />
                    <pointLight position={[-4, -2, 3]} intensity={0.9} color="#00f3ff" />
                    <FloatingShape />
                </Suspense>
            </Canvas>
        </div>
    );
}
