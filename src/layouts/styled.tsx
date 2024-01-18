import { motion } from "framer-motion";
import styled from "styled-components";

export const BaseWrapper = styled.div`
  background: ${(props) => props.theme.colors.base_100};
  width: 100%;
  min-height: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

export const BaseInner = styled.div`
  position: relative!important;
  display: flex!important;
  flex-grow: 1!important;
  flex-direction: column!important;
  overflow: hidden!important
`;

export const NavBar = styled.div`
  display: none;
  @media (min-width: 992px)  {    
    display: block;
  }
`;


export const NavWrapper = styled.div`
  position: fixed;
  z-index: 1042;
  top: 0; 
  left: 0;  
  padding: 15px;
  & ul {
    width: 100%;
    padding: 15px;
    position: absolute;
    display: flex;
    flex-direction: column;
    list-style: none;
  }  
  & li {
    list-style: none;
    margin-bottom: 20px;
  }
`;

export const NavBackground = styled(motion.div)`    
  background: ${props => props.theme.colors.base_200};
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
  max-width: 95%;
  padding-top: 65px;
  box-shadow: 0 1px 1px #222;  
`;