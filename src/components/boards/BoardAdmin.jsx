import styled from "styled-components";
import { Grid, Paper } from "@mui/material";
import { AdminAccess } from "../ContentOverlay";
import { BoardContainer } from "../higherorder/StyledComp";

const Logo = styled.div`
    margin: 0;
    font-weight: 700;
    font-size: 45px;
    color: white;
`;

const BoardAdmin = () => {

  return(
    <BoardContainer className="fadeRightMini">
      <Logo sx={{ display: 'flex', flexDirection: 'column' }}>
          Edit Users
      </Logo>
      <Paper elevation={4} className="fadeLeftMini">
        <Grid container spacing={1} columns={12} xs={12} sx={{ display: 'flex', width: '100%', backgroundColor: 'black' }}>
          <AdminAccess />
        </Grid>
      </Paper>
    </BoardContainer>
  );
};
export default BoardAdmin;