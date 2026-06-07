import { Canvas } from "@react-three/fiber";
import { Suspense, Component, ReactNode } from "react";
import FloatingShape from "./FloatingShape";

class WebGLErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
    constructor(props: { children: ReactNode }) {
        super(props);
        this.state = { hasError: false };
    }
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    render() {
        if (this.state.hasError) return null;
        return this.props.children;
    }
}

export default function HeroScene() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <WebGLErrorBoundary>
                <Canvas camera={{ position: [0, 0.2, 6], fov: 48 }} dpr={[1, 1.5]}>
                    <Suspense fallback={null}>
                        <ambientLight intensity={0.9} />
                        <directionalLight position={[4, 4, 6]} intensity={1.6} />
                        <pointLight position={[-4, -2, 3]} intensity={0.9} color="#00f3ff" />
                        <FloatingShape />
                    </Suspense>
                </Canvas>
            </WebGLErrorBoundary>
        </div>
    );
}
