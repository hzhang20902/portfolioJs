import React from 'react'
import { Html } from '@react-three/drei'
import { ClockLoader, PropagateLoader, RingLoader } from "react-spinners" 


export const ClockIcon = ({ size, color }) => {

  return (
    <>
        <Html>
            <ClockLoader color={color} size={size} />
        </Html>
    </>
  )
}

export const ThreeDots = ({ size }) => {

    return (
      <>
          <Html>
              <PropagateLoader color='#3F5BE5' size={size} />
          </Html>
      </>
    )
  }

  export const Rings = ({ size, speed }) => {

    return (
      <>
          <Html>
              <RingLoader color='#3F5BE5' size={size} speedMultiplier={speed} />
          </Html>
      </>
    )
  }




