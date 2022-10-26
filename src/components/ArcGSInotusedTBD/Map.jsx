// import React, { useRef, Suspense } from "react";
// import { useCreateMap } from "./useCreateMap";
// import { useSceneMap } from "./useSceneMap";
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//     map: {
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         width: '100%',
//         height: '100%',
//         objectFit: 'cover',
//     }
// }))

// const Map = () => {

//     const classes = useStyles()

//     const mapRef = useRef(null);
//     useCreateMap(mapRef);
//     useSceneMap(mapRef);

//     return (
//     <div className="main">
//         <div className="overlay">
//         <Suspense fallback={<div>Loading...</div>}>
//         <div className={classes.map} ref={mapRef} />
//         </Suspense>
//         </div>
//     </div>
//     );
// }

// export default Map;

