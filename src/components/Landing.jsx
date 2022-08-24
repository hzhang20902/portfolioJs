import React from "react";
import eklutnaWide from '../assets/eklutnaWide.mp4';

export default function Landing() {

    return (
        <>
            <video src={eklutnaWide} autoPlay loop muted />
        </>
    )
}