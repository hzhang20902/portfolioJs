import React, { Suspense } from 'react'
import { useState } from 'react'
import Earth from './earth'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import TopSection from './earth/TopSection'
import { Snackbar, Alert, IconButton } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import { ClockIcon } from './higherorder/Loader'



const GlobalPage = () => {
  const [open, setOpen] = useState(true)
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false)
  };
  const [dbc, setDbc] = useState(false)

  return (
    <>
    <TopSection />
    <Canvas camera={{ position:[-4,2,200], fov: 40, isPerspectiveCamera: true }}
    style={{ backgroundColor: 'black', width: "100%", objectFit: 'cover'}}
    onDoubleClick={() => dbc? setDbc(false) : setDbc(true)}>
       <Suspense fallback={<ClockIcon color='#fff' size='100' speed='0.5'/>}>
        <Earth isDbc={dbc} />
        <OrbitControls 
        enablePan
        enableZoom
        enableRotate
        zoomSpeed={0.3} 
        />
       </Suspense>
    </Canvas>
    <Snackbar open={open} autoHideDuration={10000} onClose={handleClose}>
            <Alert severity='info'>
            This page contains a Three.js rendering of an earth with tech icons. It may take a sec to load!
              <IconButton size="small" aria-label="close" onClick={handleClose}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </Alert>
          </Snackbar>
    </>
  )
}

export default GlobalPage