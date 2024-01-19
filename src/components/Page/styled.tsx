import styled from "styled-components";
import { motion } from 'framer-motion';
import theme from "../../theme";

interface CustomStyledDivProps {
  [key: string] : any;
}

export const PageWrapper = styled.div<CustomStyledDivProps>`
  background: ${theme.colors.base_100};
  color: #fafafa;
  flex-grow: 1;
  display: flex;
  flex-direction: column;  
  ${props => props.customStyles}
`;

export const PageInnerStyle = styled.div<CustomStyledDivProps>`
  width:100%;    
  flex-grow: 1;
  display: flex;
  flex-direction: column;    
  padding:40px;
  ${props => props.customStyles}
  @media (max-width: 991px)  {    
    padding: 25px;
  }    
`;

export const PageTransition = styled(motion.div)`
  background: ${theme.colors.primary};
  position: fixed;
  display: none;    
  overflow: hidden;
`;