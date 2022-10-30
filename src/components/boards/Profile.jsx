import AuthService from "../../services/auth.service";
import BigWaveModel from "../avatar/BigWaveModel";
import { React, Suspense } from "react";
import { Clock } from "../higherorder/Loader";
import { Canvas } from "@react-three/fiber";
import SectionWrapper from "../higherorder/SectionWrapper";
import { MainContainer } from "../higherorder/StyledComp";

const currentUser = AuthService.getCurrentUser();

const Profile = () => {
    
    return(
       <MainContainer>
       <div className="main">
       <div className="overlay"></div>
            <div className="content" style={{ "z-index":'' }}>
            <SectionWrapper
            title={`${currentUser.username} Profile`} 
            description={`Token: ${currentUser.accessToken.substring(0, 18)} ...`}
            showDesc2
            showDesc3
            desc3="Welcome to your User profile! You can return to 'Projects' with logged in credentials.
            Users register/authenticate through Spring Security, and are assigned a unique JSON Web Token.
            Their info is stored in a PostgreSQL db, with relational USER ROLES to determine their access level."
            desc2={`Email: ${currentUser.email}.`}
            banner='banner02'
            mockupImg={null}
            />
            </div>
          
            {currentUser? (<Canvas 
                camera={{ position: [1, 0, 13], fov: 20}}
                style={{ width: "100%", objectFit: 'cover'}}>
                <Suspense fallback={<Clock color='#fff' size='125' speed='0.5'/>}>
                <BigWaveModel position={[1,-1,0]}/>
                <pointLight color='#f6f3ea' position={[6, 12, 15]} intensity={1.3}  />
                </Suspense>
            </Canvas>) : null}
          
            </div>
        </MainContainer>
    );
};
export default Profile;