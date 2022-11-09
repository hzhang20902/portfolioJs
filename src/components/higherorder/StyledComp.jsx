import styled from 'styled-components'

const NavButton = styled.button`
    outline: none;
    border: none;
    color: #fff;
    border-radius: 3px;
    cursor: pointer;
    border: 2px solid transparent;
    transition: all 250ms ease-in-out;
    &:hover{
        background-color: transparent;
        border 2px solid white;
    }
`;

const MainButton = styled(NavButton)`
    color: rgba(13, 78, 217, 0.94);
    background-color: transparent
    font-size: 16px;
    font-weight: 700;
    border: 2px solid rgba(13, 78, 217, 0.94);
    border-radius: 8px;
    padding: 8px 2em;
    ${'' /* margin-top: 3em; */}
    &:hover {
        background-color: transparent;
        color: rgba(13, 78, 217, 0.94);
        
  }
`;

const SButton = styled(MainButton)`
    margin: 2.5em;
    &:hover {
        color: rgba(13, 78, 217, 0.94);
    }
`;

const SContainer = styled.div`
    position: absolute;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    object-fit: cover;
`;

const MainContainer = styled(SContainer)`
    height: 100%;
    bottom: 0;
    left: 0;
    z-index: 99;
  
`;

const BoardContainer = styled(MainContainer)`
    justify-content: unset;
    object-fit: unset;
    padding: 10%;
`;

export { NavButton, MainButton, SButton, SContainer, MainContainer, BoardContainer };