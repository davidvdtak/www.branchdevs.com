import React, { MouseEvent } from "react";
import { NavLinkWrapper, LinkText } from "./styled";
import { Link, useLocation } from "react-router-dom";
import theme from "../../theme";
import SVG from "../SVG";

interface Props {
  link: string;
  icon?: any;
  label?: string;
}

const NavLink: React.FC<Props> = ({ 
  link, 
  icon, 
  label,
}) => {

  const pathname = useLocation().pathname

  return (    
    <NavLinkWrapper 
      theme={theme} 
      $active={(link === '/' && pathname === '/') || (link !== '/' && pathname.startsWith(link)) ? true : false}
    >
      <Link to={link}>
        {icon &&
          <SVG 
            styles={{
              width: "20px", 
              height: "23px", 
              marginRight: "8px", 
              "& path" : {fill : (link === '/' && pathname === '/') || (link !== '/' && pathname.startsWith(link)) ? theme.colors.body : theme.colors.base_500}
            }}
          >
            {icon}
          </SVG>
        }
        <LinkText 
          theme={theme} 
          $active={(link === '/' && pathname === '/') || (link !== '/' && pathname.startsWith(link)) ? true : false}
          >
          {label}
        </LinkText>
      </Link>
    </NavLinkWrapper>    
  );
};

export default NavLink;
