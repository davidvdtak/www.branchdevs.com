import styled from "styled-components";
import { motion } from 'framer-motion';

export const PageWrapper = styled.div`
  background: ${props => props.theme.colors.base_100};
  color: #fafafa;
  flex-grow: 1;
  display: flex;
  flex-direction: column;  
`;

export const PageInner = styled.div`
  width:100%;    
  flex-grow: 1;
  display: flex;
  flex-direction: column;    
  padding:40px;
  @media (max-width: 991px)  {    
    padding: 25px;
  }    
`;

export const PageTransition = styled(motion.div)`
  position: absolute;
  display: none;
  left: 0%;
  top: 0%;     
  background: ${props => props.theme.colors.primary};
`;