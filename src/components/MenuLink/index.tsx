import React from "react";
import { NavLinkWrapper, LinkText } from "./styled";
import { Link, useLocation } from "react-router-dom";
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
      $active={(link === '/' && pathname === '/') || (link !== '/' && pathname.startsWith(link)) ? true : false}
    >
      <Link to={link}>
        {icon &&
          <SVG 
            styles={{
              width: "20px", 
              height: "23px", 
              marginRight: "8px", 
            }}
          >
            {icon}
          </SVG>
        }
        <LinkText 
          $active={(link === '/' && pathname === '/') || (link !== '/' && pathname.startsWith(link)) ? true : false}
          >
          {label}
        </LinkText>
      </Link>
    </NavLinkWrapper>    
  );
};

export default NavLink;
