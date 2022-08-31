import { useEffect } from "react";
import { loadModules } from "esri-loader";

export const useCreateMap = (mapRef) => {
    useEffect(()=>{
        let view;

        const initializeMap = async (mapRef) => {
            const modules = ["esri/Map", "esri/views/MapView"];
            const [Map, MapView] = await loadModules(modules);
            const map = new Map({ basemap: "streets-relief-vector" });
            view = new MapView({
                map: map,
                zoom: 13,
                container: mapRef.current,
                center: [-75.1652, 39.9526],
            });
        };

        initializeMap(mapRef);

        return () => view?.destroy();
    }, [mapRef]);
}