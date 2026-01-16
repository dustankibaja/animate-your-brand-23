import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Torus, Box } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField() {
  const particlesRef = useRef<THREE.Points>(null);
  const count = 500;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.01;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#0d9488"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function FloatingGeometry() {
  const torusRef = useRef<THREE.Mesh>(null);
  const boxRef = useRef<THREE.Mesh>(null);
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    
    if (torusRef.current) {
      torusRef.current.rotation.x = time * 0.3;
      torusRef.current.rotation.y = time * 0.2;
    }
    
    if (boxRef.current) {
      boxRef.current.rotation.x = time * 0.2;
      boxRef.current.rotation.z = time * 0.3;
    }
    
    if (sphereRef.current) {
      sphereRef.current.position.y = Math.sin(time * 0.5) * 0.3;
    }
  });

  return (
    <>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <Sphere ref={sphereRef} args={[1, 64, 64]} position={[0, 0, 0]}>
          <MeshDistortMaterial
            color="#0d9488"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>
      </Float>

      <Float speed={1.5} rotationIntensity={0.8} floatIntensity={0.8}>
        <Torus ref={torusRef} args={[2.5, 0.08, 16, 100]} position={[0, 0, -1]}>
          <meshStandardMaterial
            color="#f97316"
            emissive="#f97316"
            emissiveIntensity={0.3}
            metalness={0.9}
            roughness={0.1}
          />
        </Torus>
      </Float>

      <Float speed={1} rotationIntensity={1} floatIntensity={0.5}>
        <Box ref={boxRef} args={[0.5, 0.5, 0.5]} position={[3, 1, -2]}>
          <meshStandardMaterial
            color="#0d9488"
            metalness={0.8}
            roughness={0.2}
          />
        </Box>
      </Float>

      <Float speed={1.2} rotationIntensity={0.6} floatIntensity={0.7}>
        <Box args={[0.3, 0.3, 0.3]} position={[-3, -1, -1]}>
          <meshStandardMaterial
            color="#f97316"
            emissive="#f97316"
            emissiveIntensity={0.2}
            metalness={0.7}
            roughness={0.3}
          />
        </Box>
      </Float>
    </>
  );
}

export default function Scene3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={['#0a0a0f']} />
        <fog attach="fog" args={['#0a0a0f', 5, 20]} />
        
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#0d9488" />
        <pointLight position={[5, 5, 5]} intensity={0.3} color="#f97316" />

        <FloatingGeometry />
        <ParticleField />
      </Canvas>
    </div>
  );
}
