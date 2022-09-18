import React, { useState, useEffect } from "react";
import UserService from "../../services/user.service";
import styled from "styled-components";
import { List, Divider, ListItem } from "@mui/material";

const TopSectionContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    bottom: 0;
    left: 0;
    background-color: #1755dd42;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 7%;
    z-index: 99;
    
`;

const Logo = styled.div`
    margin: 0;
    color: #fff;
    font-weight: 700;
    font-size: 45px;
`;


const BoardModerator = () => {
    const [content, setContent]  = useState([]);

    useEffect(() => {
        UserService.getModeratorBoard().then(
            (response) => {
                setContent(response.data);
            },
            (error) => {
                const _content = 
                (error.response && error.response.data && error.response.data.message) ||
                error.message ||
                error.toString();
                setContent(_content);
            }
        );
    }, []);

    return(
        <TopSectionContainer>
        <Logo>
            List of Users
        </Logo>
        <div className="users card-container">
         <List>
        {content.slice(content.length-4, content.length).map((key) => (
            <ListItem index={key.id}>
            ID: {key.id}
            <br />
            Username: {key.username}
            <br />
            Email: {key.email}
                <Divider />
            </ListItem>
        ))}
        </List>
        </div>
        </TopSectionContainer>
    )

    // return(
    //    <TopSectionContainer>
    //     <Logo>
    //         {content}
    //     </Logo>
    //    </TopSectionContainer>
    // );
};
export default BoardModerator;