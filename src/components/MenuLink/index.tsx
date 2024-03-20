import React from "react";
import { NavLinkWrapper, LinkText } from "./styled";
import { Link, useLocation } from "react-router-dom";

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
          {icon}
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
