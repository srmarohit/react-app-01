
import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

export const Button = styled(LinkS)`
    border-radius:50px;
    background : ${({ primary }) => (primary ? "#01bf71" : "darkgreen")} ;
    white-space:nowrap;
    padding: ${({ pbig }) => (pbig ? "16px 24px" : "14px 22px")};
    display:flex;
    font-size: ${({ fbig }) => (fbig ? "32px" : "24px")};
    justify-content:center;
    color: ${({ dark }) => (dark ? '#010606' : '#fff')};
    align-items:center;
    text-decoration:none;
    border:none;
   outline:none;
    cursor:pointer;
    transition:0.2s all ease-in-out;

&:hover{
      transition:0.2s all ease-in-out;
      background : ${({ primary }) => (primary ? "#fff" : "#01bf71")} ;
}
    
`;