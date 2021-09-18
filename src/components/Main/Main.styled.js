import styled from 'styled-components';

export const Styled = styled.main`
height: calc(100vh - 75px);
width: 100%;
background: black;
color: white;
`;

export const List = styled.div`
    overflow: auto;
    height: calc(100vh - 100px);
    padding: 10px;
    background: black;
    @media (max-width: 993.4px) {
      position: absolute;
      left: 0%;
      width: 100%;
      height: 100%;
      height: calc(100vh - 100px);
      overflow: auto;
    }
`

export const Users = styled.div`
   border: 1px solid darkgreen;
`
export const User = styled.div`
   border: 1px solid darkgreen;
   width: 100%;
   height: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`