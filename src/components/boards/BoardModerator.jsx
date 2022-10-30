import styled from "styled-components";
import { Grid, Paper } from "@mui/material";
import { ModBoard } from "../ContentOverlay";

const TopSectionContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    bottom: 0;
    left: 0;
    display: flex;
    background-color: black;
    flex-direction: column;
    align-items: center;
    padding: 10%;
    z-index: 99;
    
`;

const Logo = styled.div`
    margin: 0;
    font-weight: 700;
    font-size: 45px;
    color: white;
`;

const BoardModerator = () => {
  
  return(
    <TopSectionContainer className="fadeRightMini">      
      <Logo sx={{ display: 'flex', flexDirection: 'column' }}>
          Users
      </Logo>
      <Paper elevation={4} className="fadeLeftMini">
            <Grid container spacing={1} columns={12} xs={12} sx={{ display: 'flex', width: '100%', backgroundColor: 'black' }}>
              <ModBoard />
          </Grid>
      </Paper>
    </TopSectionContainer>
  )
};
export default BoardModerator;