import AuthService from "../../services/auth.service";
import BigWaveModel from "../avatar/BigWaveModel";
import { React, Suspense } from "react";
import { ClockIcon } from "../higherorder/Loader";
import { Canvas } from "@react-three/fiber";
import SectionWrapper from "../higherorder/SectionWrapper";
import { MainContainer } from "../higherorder/StyledComp";

const currentUser = AuthService.getCurrentUser();

const Profile = () => {
    
    return(
       <MainContainer>
       <div className="main">
       <div className="overlay"></div>
            <div className="content" style={{ "z-index":'1', "background-color": 'transparent'}}>
            <SectionWrapper
            title={`Welcome ${currentUser.username}`} 
            description={`Token: ${currentUser.accessToken.substring(0, 18)} ...`}
            // showDesc2
            // desc2={`Email: ${currentUser.email}.`}
            showDesc3
            desc3="Welcome to your User profile! Users register/authenticate through Spring Security, and are assigned a unique JSON Web Token.
            Their info is stored in a PostgreSQL db, with relational USER ROLES to determine their access level."
          
            banner='banner02'
            mockupImg={null}
            showBtn
            route='/home'
            btnText='Projects'
            />
            </div>
          
            {currentUser? (<Canvas 
                camera={{ position: [1, 0, 13], fov: 20}}
                style={{ width: "100%", height: '73%', zIndex: "2"}}>
                <Suspense fallback={<ClockIcon color='#fff' size='100' speed='0.5'/>}>
                <BigWaveModel position={[1.15,-1.35,5]}/>
                <pointLight color='#f6f3ea' position={[6, 12, 15]} intensity={1.3}  />
                </Suspense>
            </Canvas>) : null}
          
            </div>
        </MainContainer>
    );
};
export default Profile;