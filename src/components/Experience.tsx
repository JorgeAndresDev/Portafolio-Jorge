import { useEffect, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Float, Stars, Box } from '@react-three/drei';
import * as THREE from 'three';

export const Experience = () => {
  const cube1Ref = useRef<THREE.Mesh>(null);
  const cube2Ref = useRef<THREE.Mesh>(null);
  const cube3Ref = useRef<THREE.Mesh>(null);
  const scrollProgress = useRef(0);
  const { camera } = useThree();

  useEffect(() => {
    const updateScroll = () => {
      if (typeof window === 'undefined') return
      scrollProgress.current = Math.min(window.scrollY / (window.innerHeight * 1.5), 1)
    }

    updateScroll()
    window.addEventListener('scroll', updateScroll, { passive: true })
    return () => window.removeEventListener('scroll', updateScroll)
  }, [])

  useFrame((state) => {
    const scroll = scrollProgress.current
    const time = state.clock.elapsedTime

    if (cube1Ref.current) {
      cube1Ref.current.rotation.x = time * 0.1 + scroll * 1.5
      cube1Ref.current.rotation.y = time * 0.15 + scroll * 2
      cube1Ref.current.position.y = THREE.MathUtils.lerp(cube1Ref.current.position.y, scroll * 5, 0.05)
    }
    if (cube2Ref.current) {
      cube2Ref.current.rotation.x = -time * 0.2 + scroll * 1
      cube2Ref.current.rotation.z = time * 0.1 + scroll * 1.5
      cube2Ref.current.position.y = THREE.MathUtils.lerp(cube2Ref.current.position.y, scroll * 3, 0.05)
    }
    if (cube3Ref.current) {
      cube3Ref.current.rotation.y = time * 0.3 + scroll * 2
      cube3Ref.current.rotation.z = -time * 0.15 + scroll * 1
      cube3Ref.current.position.y = THREE.MathUtils.lerp(cube3Ref.current.position.y, scroll * 7, 0.05)
    }

    const targetCameraPosition = new THREE.Vector3(0, 0, 8)
    camera.position.lerp(targetCameraPosition, 0.05)
    camera.lookAt(0, 0, 0)
  })

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#00ffff" />

      <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={0.5} />

      <Float speed={1.5} rotationIntensity={1} floatIntensity={1.5}>
        <Box ref={cube1Ref} args={[3, 3, 3]} position={[0, -0.5, -4]}>
          <meshStandardMaterial color="#000000" metalness={0.9} roughness={0.1} wireframe={true} />
        </Box>
      </Float>

      <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
        <Box ref={cube2Ref} args={[1.5, 1.5, 1.5]} position={[-3, 1, -2]}>
          <meshStandardMaterial color="#06b6d4" transparent opacity={0.6} metalness={0.5} roughness={0.2} />
        </Box>
      </Float>

      <Float speed={1.2} rotationIntensity={0.8} floatIntensity={1}>
        <Box ref={cube3Ref} args={[1, 1, 1]} position={[3, -2, -1]}>
          <meshStandardMaterial color="#8b5cf6" metalness={0.8} roughness={0.1} wireframe={true} />
        </Box>
      </Float>
    </>
  );
};
