import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Stars, MeshDistortMaterial, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const FloatingShape = ({ position, rotation, scale, color, opacity, type = 'cone' }: any) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z += 0.001;
      meshRef.current.rotation.x += 0.002;
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime + position[0]) * 0.002;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
        {type === 'cone' ? (
          <coneGeometry args={[1, 2, 3]} />
        ) : type === 'dodecahedron' ? (
          <dodecahedronGeometry args={[1, 0]} />
        ) : (
          <octahedronGeometry args={[1, 0]} />
        )}
        <MeshDistortMaterial 
          color={color} 
          transparent 
          opacity={opacity} 
          roughness={0.2}
          metalness={0.8}
          distort={0.3}
          speed={2}
        />
      </mesh>
    </Float>
  );
};

const SceneContent = () => {
  const { mouse, viewport } = useThree();
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      const targetX = (mouse.x * viewport.width) / 10;
      const targetY = (mouse.y * viewport.height) / 10;
      groupRef.current.position.x += (targetX - groupRef.current.position.x) * 0.05;
      groupRef.current.position.y += (targetY - groupRef.current.position.y) * 0.05;
    }
  });

  const shapes = useMemo(() => [
    { type: 'cone', pos: [-5, 3, -8], color: '#f59e0b', scale: 1.5 },
    { type: 'dodecahedron', pos: [6, -2, -10], color: '#b45309', scale: 2 },
    { type: 'octahedron', pos: [-2, -4, -6], color: '#d97706', scale: 1.2 },
    { type: 'cone', pos: [4, 4, -12], color: '#92400e', scale: 1.8 },
    { type: 'dodecahedron', pos: [-8, -1, -15], color: '#78350f', scale: 2.5 },
  ], []);

  return (
    <>
      <group ref={groupRef}>
        {shapes.map((s, i) => (
          <FloatingShape 
            key={i}
            type={s.type}
            position={s.pos}
            scale={[s.scale, s.scale, s.scale]}
            color={s.color}
            opacity={0.4}
          />
        ))}
      </group>

      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <fog attach="fog" args={['#27130a', 5, 30]} />
    </>
  );
};

const GeometricBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] bg-[#1a0f0a]">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900/40 via-orange-950/40 to-[#1a0f0a] z-0" />
      <Canvas dpr={[1, 2]}>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={50} />
          <ambientLight intensity={0.5} />
          <pointLight position={[-10, 10, -5]} intensity={2} color="#fbbf24" />
          <SceneContent />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default GeometricBackground;