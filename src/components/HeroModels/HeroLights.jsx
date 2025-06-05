// import * as Three from 'three';
// const HeroLights = () => {
//   return (
//     <>
//       {/* Desk Lamp */}
//       <spotLight
//         position={[2, 3, 6]}
//         angle={0.15}
//         intensity={100}
//         penumbra={0.5}
//         color="white"        
//       />
//       {/* Near Roomba and Radiator */}
//       <spotLight
//         position={[4, 5 ,4]}
//         angle={0.3}
//         intensity={40}
//         penumbra={0.6}
//         color="#4cc9f0"        
//       />
//       {/* Behind Desk */}
//       <spotLight
//         position={[-3, 5, 5]}
//         angle={0.4}
//         intensity={60}
//         penumbra={1}
//         color="#9d4edd"        
//       />

//       <primitive
//         object={new Three.RectAreaLight('#A259FF', 8, 3 ,2)}
//         position={[1, 3, 4]}
//         intensity={15}
//         rotation = {[-Math.PI / 4, Math.PI / 4, 0]}    
//       />

//       <pointLight
//         position={[0, 1, 0]}
//         intensity={10}
//         color="#7209b7"
//       />  

//       <pointLight
//         position={[1, 2, -2]}
//         intensity={10}
//         color="#0d00a4"
//       />  
//     </>
//   )
// }

// export default HeroLights

import * as Three from 'three';

const HeroLights = () => {
  return (
    <>
      {/* Desk Lamp - Increase intensity, soften shadows */}
      <spotLight
        position={[2, 3, 6]}
        angle={0.2}           // slightly wider angle for softer light spread
        intensity={120}       // a bit stronger
        penumbra={0.7}        // softer edges
        color="white"
        castShadow             // enable shadows if your scene supports it
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      {/* Near Roomba and Radiator - brighter and more saturated */}
      <spotLight
        position={[4, 5 ,4]}
        angle={0.4}           // wider for more coverage
        intensity={60}        // increase brightness
        penumbra={0.8}
        color="#4cc9f0"
      />

      {/* Behind Desk - richer purple, more intensity */}
      <spotLight
        position={[-3, 5, 5]}
        angle={0.5}
        intensity={80}
        penumbra={1}
        color="#a55eff"
      />

      {/* RectAreaLight - increase size and intensity */}
      <primitive
        object={new Three.RectAreaLight('#A259FF', 10, 4 ,3)}
        position={[1, 3, 4]}
        intensity={18}
        rotation={[-Math.PI / 4, Math.PI / 4, 0]}
      />

      {/* Point Lights - stronger and color adjusted */}
      <pointLight
        position={[0, 1, 0]}
        intensity={2}
        color="#8a2be2"
      />

      <pointLight
        position={[1, 2, -2]}
        intensity={12}
        color="#2a00c4"
      />
    </>
  )
}

export default HeroLights;
