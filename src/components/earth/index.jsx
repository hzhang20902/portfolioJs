import React, { useRef, useState } from 'react';
import GroundTexture from '../../textures/groundTexture.jpg';
import EarthClear from '../../textures/earth_noClouds.jpg';
import Clouds from '../../textures/clouds.jpeg';
import assets from '../../assets';
import MetalRivet from '../../textures/metalrivet.jpeg'
import GreenGlass from '../../textures/greenglass.jpeg'

import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';
import CamAnimate from './CamAnimate'



const Earth = ({ isDbc }) => {
    

    const [button, setButton] = useState(false) 

    const ThreeLogo = assets.threelogo
    const ReactLogo = assets.reactCube
    const JavaLogo = assets.java2
    const JLogo = assets.javascript
    const ExpLogo = assets.express
    const Spring = assets.springboot
    const Postgres = assets.psqlLogo
    const Tailwind = assets.tailwind

    const [clouds,
        earthClear,
        groundTexture, threeLogo, reactLogo, javaLogo, jLogo, expLogo, spring, postgres, tailwind, metalRivet, greenGlass ] = useLoader(
        TextureLoader, 
        [Clouds, EarthClear, GroundTexture, ThreeLogo, ReactLogo, JavaLogo, JLogo, ExpLogo, Spring, Postgres, Tailwind, MetalRivet, GreenGlass]
        );

    const earthRef = useRef();
    const cloudsRef = useRef();
    const saucerOrbitRef = useRef();

    const reactRef = useRef();
    const javaScriptRef = useRef();    
    const threeRef = useRef();
    const tailRef = useRef();
    const expRef = useRef();
    const javaRef = useRef();
    const springRef = useRef();
    const postRef = useRef();

    const frontRef = useRef();
    const designRef = useRef();
    const apiRef = useRef();
    const reverseRef = useRef();
    

    const randomX = Math.round(Math.random()*10)
    const randomY = Math.round(Math.random()*10)
    const randomZ = Math.round(Math.random()*10)

    useFrame(( { clock } )=>{
        const elapsedTime = clock.getElapsedTime();

        const cubeRotationX = elapsedTime/randomX
        const cubeRotationY = elapsedTime/randomY
        const cubeRotationZ = elapsedTime/randomZ
        
        const reactR = reactRef.current.rotation
        const javaScriptR = javaScriptRef.current.rotation
        const threeR = threeRef.current.rotation
        const tailR = tailRef.current.rotation
        const expR = expRef.current.rotation
        const javaR = javaRef.current.rotation
        const springR = springRef.current.rotation
        const postR = postRef.current.rotation

        //rotation
        earthRef.current.rotation.y = elapsedTime/25;
        cloudsRef.current.rotation.y = elapsedTime/25;

        saucerOrbitRef.current.rotation.y= elapsedTime;
        

        reactR.x = cubeRotationX
        reactR.y = cubeRotationZ
        reactR.z = cubeRotationY

        javaScriptR.x = cubeRotationZ
        javaScriptR.y = cubeRotationY
        javaScriptR.z = cubeRotationX

        threeR.x = cubeRotationZ
        threeR.y = cubeRotationX
        threeR.z = cubeRotationY

        tailR.x = cubeRotationX
        tailR.y = cubeRotationZ
        tailR.z = cubeRotationY

        expR.x = cubeRotationZ
        expR.y = cubeRotationY
        expR.z = cubeRotationX

        javaR.x = cubeRotationY
        javaR.y = cubeRotationZ
        javaR.z = cubeRotationX

        springR.x = cubeRotationX
        springR.y = cubeRotationY
        springR.z = cubeRotationY

        postR.x = cubeRotationZ
        postR.y = cubeRotationX
        postR.z = cubeRotationZ

        //orbit
        frontRef.current.rotation.y = -elapsedTime*randomZ/19
        // frontRef.current.rotation.x = elapsedTime*randomX/17

        designRef.current.rotation.y = -elapsedTime*randomY/22
        // designRef.current.rotation.x = -elapsedTime/7

        apiRef.current.rotation.y = -elapsedTime*randomY/17
        // apiRef.current.rotation.x = elapsedTime*randomZ/24

        reverseRef.current.rotation.y = elapsedTime*randomX/16
        // reverseRef.current.rotation.x = -elapsedTime*randomX/23

    })



    const intPos = [0,0,0]
    
    return <>
        {/* <pointLight color='#f6f3ea' position={[0, 0, 240]} intensity={3.1} /> */}
        
        <CamAnimate cubeClick={button} doubleClick={isDbc}/>
        <pointLight color='#f6f3ea' position={[3, 5, 20]} intensity={7.1} />
        
        <Stars radius={300} depth={60} count={50000} factor={10} saturation={0} fade={true}/>

        <mesh receiveShadow position={intPos} ref={cloudsRef}>
            <sphereGeometry args={[4.07, 32, 32, 16]} />
            <meshPhongMaterial 
            map={clouds}
            transparent={true}
            depthWrite={true} 
            opacity={0.5}
            side={THREE.DoubleSide} />
        </mesh>
        <mesh receiveShadow position={intPos} ref={earthRef}>
            <sphereGeometry args={[4, 50, 50, 16 ]} />
            <meshPhongMaterial color='red' />
            <meshStandardMaterial 
            map={earthClear} 
            normalMap={groundTexture}
            metalness={0.6}
            roughness={0.3}/>
            <OrbitControls 
                zoomSpeed={0.6}
                panSpeed={0.5}
                rotateSpeed={0.4} />
        </mesh>

        <group ref={frontRef}>
        <mesh castShadow position={[0,-2,7]} ref={reactRef} onClick={(e) => {setButton(true)}}>
            <boxGeometry args={[1,1,1,1]} />
            <meshPhongMaterial 
            map={reactLogo}
            color="grey"
            side={THREE.DoubleSide}
            />
        </mesh>
        <mesh castShadow position={[1,2,-5]} ref={javaScriptRef}>
            <boxGeometry args={[1,1,1,1]} />
            <meshPhongMaterial 
            map={jLogo}
            color="grey"/>
        </mesh>
        </group>

        <group ref={designRef}>
        <mesh castShadow position={[-2,0,-6]} ref={threeRef}>
            <boxGeometry args={[1,1,1,1]} />
            <meshPhongMaterial 
            map={threeLogo}
            color="grey"/>
        </mesh>
        <mesh castShadow position={[3,1.2,5.5]} ref={tailRef}>
            <boxGeometry args={[1,1,1,1]} />
            <meshPhongMaterial 
            map={tailwind}
            color="grey"/>
        </mesh>
        </group>

        <group ref={apiRef}>
        <mesh castShadow position={[1,-1,-6.3]} ref={expRef}>
            <boxGeometry args={[1,1,1,1]} />
            <meshPhongMaterial 
            map={expLogo}
            color="grey"/>
        </mesh>
        </group>

        <group ref={reverseRef}>
        <mesh castShadow position={[3,0,4.7]} ref={javaRef}>
            <boxGeometry args={[1,1,1,1]} />
            <meshPhongMaterial 
            map={javaLogo}
            color="grey"/>
        </mesh>
        <mesh castShadow position={[-2,-2.3,5.8]}  ref={springRef}>
            <boxGeometry args={[1,1,1,1]} />
            <meshPhongMaterial 
            map={spring}
            color="grey"/>
        </mesh>
        <mesh castShadow position={[0,0,-6]} ref={postRef}>
            <boxGeometry args={[1,1,1,1]} />
            <meshPhongMaterial 
            map={postgres}
            color="grey"/>
        </mesh>
        </group>

        <group ref={saucerOrbitRef}>
        <mesh position={[0,1,300]} >
            <sphereGeometry args={[1,50,50,2]} />
            <meshPhysicalMaterial 
            map={greenGlass}
            transparent={true}
            depthWrite={true}
            opacity={0.9}
            color="grey"
            />
        </mesh>
        <mesh position={[0,0,300]} >
            <coneGeometry args={[7,2,60,60,false]} />
            <meshStandardMaterial 
            map={metalRivet}  />
        </mesh>
        </group>
        {/* <gridHelper position={[0,-5,0]} /> */}
    </>
}

export default Earth;