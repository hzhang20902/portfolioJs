import React, { useRef } from "react";
import { useCreateMap } from "./useCreateMap";
import { useSceneMap } from "./useSceneMap";

const Map = () => {
    const mapRef = useRef(null);
    // useCreateMap(mapRef);
    useSceneMap(mapRef);

    return <div className="map-view" ref={mapRef} />
}

export default Map;

