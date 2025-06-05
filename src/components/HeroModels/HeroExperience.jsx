import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { useMediaQuery } from 'react-responsive';
import { Room } from './Room.jsx'
import { Laptop } from './Laptop.jsx'
import HeroLights from './HeroLights.jsx';

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)'});
  const isMobile = useMediaQuery({ query: '(max-width: 768px)'});
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45}} >
    
      <OrbitControls
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      <HeroLights />
      <group
        scale={isMobile? 0.7 : 1}
        position={[0, 0, 0]}
        rotation={[0, -Math.PI / 4, 0]}
       > 
        {/* Laptop Brightness */}
       <directionalLight position={[5, 5, 5]} intensity={.3} />
       <pointLight position={[-5, 2, 5]} intensity={0.8} />
        <Laptop />
      </group> 
    </Canvas>
    
  )
}

export default HeroExperience