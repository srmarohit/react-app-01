
import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';
import { FaBars } from 'react-icons';

export const Nav = styled.nav`
        
           height : 80px;
       margin-top: -80px; 
         display:flex;
        justify-content:center;
        align-items:center;
        font-size:1rem;
        position : sticky;
        top : 0;
        z-index:10;
        background-color:${({ scrollNav }) => (scrollNav ? "#000" : "transparent")};

@media screen and (max-width : 960px){
     transition : 0.8s all ease ;
}
`;

export const NavContainer = styled.div`
     display:flex ;
     justify-content : space-between;
     align-items:center;
     padding:0 24px;
     width:100%;
     height:60px;
     max-width:1100px;
`;

export const NavLogo =  styled(LinkR)`
     color:#fff;
     text-decoration:none;
     justify-self:flex-start;
      display:flex;
     align-items:center;
      font-size:1.5rem;
      margin-left:24px;
      font-weight:bold;
`;

export const MobileIcon = styled.div`
       display : none ;

@media screen and (max-width:768px){
      display:block;
      position:absolute;
      top : 0;
      right : 0;
      font-size:1.8rem;
      color:#fff;
      transform: translate(-100%, 60%);
      pointer : cursor ;
}
`;


export const NavMenu = styled.ul`
      display:flex;
      align-items:center;
      list-style:none;
      margin-right:-22px;
      text-align:center;

@media screen and (max-width:768px){
   display:none;
}
`;

export const NavItem = styled.li`
     text-align:center;         // height:80px;
`;

export const NavLinks = styled(LinkS)`
       display:flex;
       align-items:center;
       width:100%;
       color:#fff;
       padding:1rem 1rem;
       cursor:pointer;
       text-decoration:none;

&.active{
    border-bottom : 3px solid #01bf71 ;
}
`;

export const NavBtn = styled.nav`
       display:flex;
       align-items:center;
       

@media screen and (max-width:768px){
      display:none;
}
`;


export const NavBtnLink = styled(LinkR)`
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















