import React from 'react'
import styled from 'styled-components'

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
            My Website Tech:
        </Logo>
    </Contain>
  )
}

export default TopSection