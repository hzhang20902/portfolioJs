import { useState, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const CamAnimate = ( { cubeClick, doubleClick} ) => {
    
    useEffect(() => {
        setMouse(true) 
        // setClicked(cubeClick)

      return () => {
        // setClicked(false)
      }
    }, [])
    
    
    // const [clicked, setClicked] = useState(false)
    // const [variables, setVariables] = useState(null)
    // const [earthlink, setEarthlink] = useState(false)
    const [mouse, setMouse] = useState(false)
    const vec = new THREE.Vector3()

    useFrame(state => {
       
        if (mouse || doubleClick ===false) {
            state.camera.lookAt(0,0,-40)
            state.camera.position.lerp(vec.set(3, -2, 27), .01)
            state.camera.updateProjectionMatrix()
        } 
        if (doubleClick === true){
            setMouse(false)
            // setClicked(false)
            // setVariables(null)
            state.camera.position.lerp(vec.set(state.camera.position.x, state.camera.position.y, state.camera.position.z), .001)
            state.camera.updateProjectionMatrix()
      
        }
        // if (clicked) {
        //     state.camera.lookAt(variables[0]-2*variables[0], variables[1], variables[2])
        //     state.camera.position.lerp(vec.set(-variables[0]-2*variables[0], -variables[1]-2*variables[1], variables[2]-10*variables[2]), .003)
        //     state.camera.updateProjectionMatrix()

        // }

        return null;
    })

  return null;
}

export default CamAnimate