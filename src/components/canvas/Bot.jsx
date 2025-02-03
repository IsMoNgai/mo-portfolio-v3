import {Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader'

const Bot = () => {
  const bot = useGLTF('./butterBot/scene.gltf')

  return (
    <primitive 
      object={bot.scene}
      scale={0.2}
      position-y={-1.5}
      rotation-y={0}
    />
  )
}

const BotCanvas = () => {
  return (
    <Canvas
      shadows 
      frameloop='demand'
      gl={{preserveDrawingBuffer: true}}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6]
      }}
    >
      <Suspense fallback={<CanvasLoader></CanvasLoader>}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={10}
          enableZoom={false}
          maxPolarAngle={Math.PI/2}
          minPolarAngle={0}
        />
        <ambientLight intensity={0.5} />
        <directionalLight 
          intensity={1} 
          position={[5, 5, 5]} 
          castShadow 
        />
        <Bot/>
      </Suspense>
    </Canvas>
  )
}

export default BotCanvas;