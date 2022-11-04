import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { MainButton } from '../higherorder/StyledComp';

const Logo = styled.div`
    margin: 0;
    color: #fff;
    font-weight: 700;
    font-size: 45px;
`;

const Contain = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    padding-top: 3.5em;
    padding-left: 2em;
`

const TopSection = () => {
  return (
    <Contain>
        <Logo>
            Tech Stacks:
        </Logo>
          {/* <Link to={'/contact'}>
        <MainButton style={{bottom: 0}}>
            Send A Msg
        </MainButton>
          </Link> */}
    </Contain>
  )
}

export default TopSection