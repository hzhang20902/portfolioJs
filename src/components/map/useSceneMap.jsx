import { useEffect } from "react";
import { loadModules } from "esri-loader";

export const useSceneMap = (mapRef) => {
    useEffect(()=>{
        let view;

        const initializeMap = async (mapRef) => {
            const modules = ["esri/Map", "esri/views/SceneView"];
            const [Map, SceneView] = await loadModules(modules);
            const map = new Map({ basemap: "hybrid", ground:"world-elevation" });
            
            view = new SceneView({
                map: map,
                scale: 30000000,
                container: mapRef.current,
                center: [-75.1652, 39.9526],
            });
        };

        initializeMap(mapRef);

        return () => view?.destroy();
    }, [mapRef]);
}