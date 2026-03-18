"use client";

import { Canvas } from "@react-three/fiber";
import { Float, PerspectiveCamera, Stars } from "@react-three/drei";
import { Suspense } from "react";

export default function ThreeScene({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 -z-10 bg-obsidian">
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#a855f7" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06b6d4" />
          
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          
          <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            {children}
          </Float>
        </Suspense>
      </Canvas>
    </div>
  );
}
