import styled from 'styled-components'

const NavButton = styled.button`
    outline: none;
    border: none;
    background-color: rgba(13, 78, 217, 0.94);
    color: #fff;
    font-size: 16px;
    border-radius: 3px;
    cursor: pointer;
    border: 2px solid transparent;
    transition: all 250ms ease-in-out;
    &:hover{
        background-color: rgba(0, 0, 140, 1);
        color: #3F5BE5;  
    }
    text-shadow: 1px 1px 15px gray;
`

const MainButton = styled(NavButton)`
    text-shadow: unset;
    font-weight: 700;
    border-radius: 8px;
    padding: 8px 2em;
    margin-top: 3em;
    &:hover {
        background-color: transparent;
        border: 2px solid rgba(13, 78, 217, 0.94);
  }
`;

const SButton = styled(MainButton)`
    margin: 2.5em;
    &:hover {
        color: rgba(13, 78, 217, 0.94);
    }
`

const SContainer = styled.div`
    position: absolute;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const MainContainer = styled(SContainer)`
    height: 100%;
    bottom: 0;
    left: 0;
    z-index: 99;

`

export { NavButton, MainButton, SButton, SContainer, MainContainer };