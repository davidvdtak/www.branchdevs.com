import styled from "styled-components";
import { motion } from 'framer-motion';

export const PageWrapper = styled.div`
  background: ${props => props.theme.colors.base_300};
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