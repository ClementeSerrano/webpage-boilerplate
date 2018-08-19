import React from "react";
import styled from "styled-components";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import YourWebsiteLogo from "../assets/your-website-logo_white";

const Navebar = () => (
  <SuperNavBar collapseOnSelect fixedTop>
    <Navbar.Header>
      <Navbar.Brand>
        <Logo src={YourWebsiteLogo} />
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem>
          <SuperAnchor href="#intro">Home</SuperAnchor>
        </NavItem>
        <NavItem>
          <SuperAnchor href="#aboutUs"> About us </SuperAnchor>
        </NavItem>
        <NavItem>
          <SuperAnchor href="#services"> Section 2 </SuperAnchor>
        </NavItem>

        <NavItem eventKey={4}>
          <SuperAnchor href="#contactForm">Contact</SuperAnchor>
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </SuperNavBar>
);

export default Navebar;

const SuperNavBar = styled(Navbar)`
  border-color: rgba(34, 34, 34, 0.05);
  background-color: black;
  opacity: 0.7;
  font-family: "Helvetica", "Arial", "sans-serif";
  font-weight: 100;
  letter-spacing: 2px;
  font-size: 15px;
`;
const Logo = styled.img`
  height: 55px;
  width: 170px;
  max-width: 100%;
  max-height: 100%;
`;
const SuperAnchor = styled(AnchorLink)`
  color: #737373;
  text-decoration: none;
  :focus,
  :hover {
    text-decoration: none;
    color: white;
  }
`;
