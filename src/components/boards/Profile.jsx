import React from "react";
import AuthService from "../../services/auth.service";
import styled from "styled-components";
import BigWaveModel from "../avatar/BigWaveModel";
import { Suspense } from "react";
import { Clock } from "../higherorder/Loader";
import { Canvas } from "@react-three/fiber";
import SectionWrapper from "../higherorder/SectionWrapper";

const TopSectionContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 99;
    
`;

const Profile = () => {

    const currentUser = AuthService.getCurrentUser();
    
    return(
       <TopSectionContainer>
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
        </TopSectionContainer>
    );
};
export default Profile;