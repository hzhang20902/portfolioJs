import React, { useRef, Suspense } from "react";
// import { useCreateMap } from "./useCreateMap";
import { useSceneMap } from "./useSceneMap";

const Map = () => {
    const mapRef = useRef(null);
    // useCreateMap(mapRef);
    useSceneMap(mapRef);

    return (
    <Suspense fallback={<div>Loading...</div>}>
    <div className="map-view" ref={mapRef} />
    </Suspense>
    );
}

export default Map;

