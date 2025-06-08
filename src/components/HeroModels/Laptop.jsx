import React, { useState, useEffect } from 'react';
import { useGLTF } from '@react-three/drei'

export function Laptop(props) {
  const { nodes, materials } = useGLTF('/models/macbook_laptop.glb');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

   // Adjust Y position down more on mobile
  const positionY = isMobile ? -100 : -3.5;

  return (
    <group {...props} dispose={null}>
      {/* overall model tiny scale */}
      <group scale={0.01}>
        {/* hinge + screen + base group */}
        <group position={[0, positionY, 0]} rotation={[Math.PI, 0, 0]} scale={[5, 5, 5]}>
          
          {/* ——— SCREEN ——— */}
          <group position={[0, -3.5, 0]} rotation={[1.386, 0, 0]} scale={[500, 500, 500]}>
            <mesh geometry={nodes.Cube_Material004_0.geometry} material={materials['Material.004']} />
            <mesh geometry={nodes.Cube_Material002_0.geometry} material={materials['Material.002']} />
            <mesh geometry={nodes.Cube_Material003_0.geometry} material={materials['Material.003']} />
          </group>

          {/* ——— BASE & KEYBOARD (scaled up) ——— */}
          {/* Cube001 = main base */}
          <mesh
            geometry={nodes.Cube001_Material002_0.geometry}
            material={materials['Material.002']}
            scale={[1, 1, 1]}                                  // ← added scale
          />

          {/* keyboard */}
          <mesh
            geometry={nodes.Keyboard_Material001_0.geometry}
            material={materials['Material.001']}
            position={[1, 47.5,-50]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[45,45,45]}                                  // ← bumped from 50→125
          />

          {/* bottom plate / palmrest */}
          <mesh
            geometry={nodes.Cube002_Material002_0.geometry}
            material={materials['Material.002']}
            position={[-0.01, 50,-60]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[120, 120, 120]}                                  // ← bumped from 50→125
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/macbook_laptop.glb')
