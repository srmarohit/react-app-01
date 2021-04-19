import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { Link as LinkS } from 'react-scroll';
import { Link as LinkR } from 'react-router-dom';

export const TopBarContainer = styled.aside`
      position:fixed ;
      left:0;
      z-index:999;
      display:grid;
       height:100%;
       width:100%;
       align-items:center;
       background-color:#0d0d0d;
       transition:0.3s ease-in-out ;

     opacity : ${({ isOpen }) => isOpen ? '100%' : '0'} ;
     top : ${({ isOpen }) => isOpen ? "0" : "-100%"};
    
`;

export const Icon = styled.div`
     position:absolute;
     top:1.2rem;
     right:1.5rem;
     font-size:2rem;
     pointer:cursor;
     outline:none;
     background-color:transparent;
     
`;

export const CloseIcon = styled(FaTimes)`
       color:#fff;
`;

export const TopBarWrapper = styled.div`
      color:#fff;
`;

export const TopBarMenu = styled.ul`
     display:grid;
     grid-template-columns : 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align : center;

@media screen and (max-width:480px){
   grid-template-rows : repeat(6,60px);
}
`;

export const TopBarLink = styled(LinkS)`
     display:flex;
     align-items:center;
     justify-content:center;
     font-size:1.5rem;
     text-decoration:none;
     list-style:none;
     color:#fff;
     transition:0.2s all ease-in-out ;
    pointer : cursor ;

&:hover{
   color:#01bf71;
   transition:0.2s all ease-in-out;
}
`;

export const TopBarBtn = styled.div`
      display:flex;
        justify-content:center;
`;

export const TopBarBtnLink = styled(LinkR)`
 background-color:#01bf71;
       border-radius:50px;
       padding:10px 22px;
       font-size:16px;
       white-space:nowrap ;
       color:#010606;
       border:none;
       outline:none;
       cursor:pointer;
       transition: 0.2s all ease-in-out ;
       text-decoration:none;

&:hover{
   background-color:#fff;
   color:#010606;
   transition : 0.2s all ease-in-out ;
}
`;