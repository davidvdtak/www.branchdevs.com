import styled from "styled-components";

export const HeaderWrapper = styled.div`    
    border-bottom:1px solid ${props => props.theme.colors.base_300};    
    background-color: #fff;
    box-shadow: 0px 4px 12px 0px rgba(113, 125, 150, 0.05);
    position: sticky;
    top: 0;
    z-index: 1000;        
`;

export const TitleWrapper = styled.div`
    height:65px;
    display:flex;
    align-items:center;        
    padding: 0 40px;
    @media (max-width: 991px)  {    
        padding: 0 25px;
    }
`;

export const TitleInner = styled.div`  
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
`;

export const SubHeaderWrapper = styled.div`
    height:65px;
    display:flex;
    align-items:center;    
    padding: 0 40px;
    border-top:1px solid ${props => props.theme.colors.base_300};
    @media (max-width: 991px)  {    
        padding: 0 25px;
    }
`;

export const SubHeaderInner = styled.div`  
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
`;