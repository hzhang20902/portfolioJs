import React from 'react'
import { useState } from 'react'
import Earth from './earth'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import TopSection from './earth/TopSection'





const GlobalPage = () => {
  const [dbc, setDbc] = useState(false)
  return (
    <>
    <TopSection />
    <Canvas camera={{ position:[-4,2,200], fov: 40, isPerspectiveCamera: true }}
    style={{ backgroundColor: 'black', width: "100%", objectFit: 'cover'}}
    onDoubleClick={() => dbc? setDbc(false) : setDbc(true)}>
       
        <Earth isDbc={dbc} />
        <OrbitControls 
        enablePan
        enableZoom
        enableRotate
        zoomSpeed={0.3}
        
        />
    </Canvas>
    </>
  )
}

export default GlobalPage