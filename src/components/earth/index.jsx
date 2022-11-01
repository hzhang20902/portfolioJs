import React, { useRef } from 'react';
import GroundTexture from '../../textures/groundTexture.jpg';
import EarthClear from '../../textures/earth_noClouds.jpg';
import Clouds from '../../textures/clouds.jpeg';
import assets from '../../assets';

import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';



export function Earth( ){

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
        groundTexture, threeLogo, reactLogo, javaLogo, jLogo, expLogo, spring, postgres, tailwind ] = useLoader(
        TextureLoader, 
        [Clouds, EarthClear, GroundTexture, ThreeLogo, ReactLogo, JavaLogo, JLogo, ExpLogo, Spring, Postgres, Tailwind]
        );

    const earthRef = useRef();
    const cloudsRef = useRef();
    const threeRef = useRef();
    const reactRef = useRef();
    const javaScriptRef = useRef();
    const javaRef = useRef();
    const expRef = useRef();
    const springRef = useRef();
    const postRef = useRef();
    const tailRef = useRef();

    const randomX = Math.round(Math.random()*10)
    const randomY = Math.round(Math.random()*10)
    const randomZ = Math.round(Math.random()*10)

    const intPos = [-4.8, -.3, 26]

    console.log(randomX, randomY, randomZ)


    useFrame(( { clock } )=>{
        const elapsedTime = clock.getElapsedTime();

        const cubeRotationX = elapsedTime/randomX
        const cubeRotationY = elapsedTime/randomY
        const cubeRotationZ = elapsedTime/randomZ

        const threeR = threeRef.current.rotation
        const reactR = reactRef.current.rotation
        const javaR = javaRef.current.rotation
        const javaScriptR = javaScriptRef.current.rotation
        const expR = expRef.current.rotation
        const springR = springRef.current.rotation
        const postR = postRef.current.rotation
        const tailR = tailRef.current.rotation

        //rotation
        earthRef.current.rotation.y = elapsedTime/8;
        cloudsRef.current.rotation.y = elapsedTime/8

        threeR.x = cubeRotationZ
        threeR.y = cubeRotationX
        threeR.z = cubeRotationY

        reactR.x = cubeRotationX
        reactR.y = cubeRotationZ
        reactR.z = cubeRotationY

        javaR.x = cubeRotationY
        javaR.y = cubeRotationZ
        javaR.z = cubeRotationX

        javaScriptR.x = cubeRotationZ
        javaScriptR.y = cubeRotationY
        javaScriptR.z = cubeRotationX

        expR.x = cubeRotationZ
        expR.y = cubeRotationY
        expR.z = cubeRotationX

        springR.x = cubeRotationX
        springR.y = cubeRotationY
        springR.z = cubeRotationY

        postR.x = cubeRotationZ
        postR.y = cubeRotationX
        postR.z = cubeRotationZ

        tailR.x = cubeRotationX
        tailR.y = cubeRotationZ
        tailR.z = cubeRotationY

        //orbit
        // threeRef.current.position.z = elapsedTime
        // threeRef.current.position.y = 5-elapsedTime/5
        // threeRef.current.position.x = -elapsedTime/100

        // reactRef.current.position.z = elapsedTime
        // reactRef.current.position.y = 5-elapsedTime/5
        // reactRef.current.position.x = (elapsedTime/9)-8
 
        // if (elapsedTime > 40){
        //     clock.start()
        // } 
    })
    
    return <>

        <pointLight 
        color='#f6f3ea' 
        position={[3, 10, 50]} 
        intensity={5.1} 
        />

        <Stars 
        radius={300} 
        depth={60} 
        count={50000} 
        factor={10} 
        saturation={0} 
        fade={true}/>

        <mesh position={intPos} ref={cloudsRef}>
            <sphereGeometry args={[3.025, 32, 32, 16]} />
            <meshPhongMaterial 
            map={clouds}
            transparent={true}
            depthWrite={true} 
            opacity={0.5}
            side={THREE.DoubleSide} />
        </mesh>

        <mesh position={intPos} ref={earthRef}>
            <sphereGeometry args={[3, 32, 32, 16 ]} />
            <meshPhongMaterial color='red' />
            <meshStandardMaterial 
            map={earthClear} 
            normalMap={groundTexture}
            metalness={0.6}
            roughness={0.3}/>
            <OrbitControls 
                enableZoom={true} 
                enablePan={true}
                enableRotate={true}
                zoomSpeed={0.6}
                panSpeed={0.5}
                rotateSpeed={0.4} />
        </mesh>

        <mesh position={[0,2,30]} rotation={[1,2,1]} ref={threeRef}>
            <boxGeometry args={[1,1,1,1]} />
            <meshPhongMaterial 
            map={threeLogo}
            color="grey"/>
        </mesh>

        <mesh position={[-6.5,-0.5,31]} rotation={[1,2,1]} ref={reactRef}>
            <boxGeometry args={[1,1,1,1]} />
            <meshPhongMaterial 
            map={reactLogo}
            color="grey"/>
        </mesh>

        <mesh position={[-7,-3,30]} rotation={[1,2,1]} ref={javaRef}>
            <boxGeometry args={[1,1,1,1]} />
            <meshPhongMaterial 
            map={javaLogo}
            color="grey"/>
        </mesh>
        <mesh position={[-3,3,30]} rotation={[1,2,1]} ref={javaScriptRef}>
            <boxGeometry args={[1,1,1,1]} />
            <meshPhongMaterial 
            map={jLogo}
            color="grey"/>
        </mesh>
        <mesh position={[-2,-3,30]} rotation={[1,2,1]} ref={expRef}>
            <boxGeometry args={[1,1,1,1]} />
            <meshPhongMaterial 
            map={expLogo}
            side={THREE.DoubleSide}
            color="grey"/>
        </mesh>
        <mesh position={[-8,2,28]} rotation={[1,2,1]} ref={springRef}>
            <boxGeometry args={[1,1,1,1]} />
            <meshPhongMaterial 
            map={spring}
            side={THREE.DoubleSide}
            color="grey"/>
        </mesh>
        <mesh position={[0.3,-1.5,31]} rotation={[1,2,1]} ref={postRef}>
            <boxGeometry args={[1,1,1,1]} />
            <meshPhongMaterial 
            map={postgres}
            side={THREE.DoubleSide}
            color="grey"/>
        </mesh>
        <mesh position={[-5,-4,29]} rotation={[1,2,1]} ref={tailRef}>
            <boxGeometry args={[1,1,1,1]} />
            <meshPhongMaterial 
            map={tailwind}
            side={THREE.DoubleSide}
            color="grey"/>
        </mesh>
    </>

}