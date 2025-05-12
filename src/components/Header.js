import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: ${props => props.theme.background};
  box-shadow: ${props => props.theme.shadow};
  transition: all 0.3s ease;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  font-family: "Andada Pro", serif;
  color: ${props => props.theme.primary};
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 70px;
    left: ${props => (props.isOpen ? '0' : '-100%')};
    width: 100%;
    background-color: ${props => props.theme.background};
    padding: 2rem;
    transition: all 0.3s ease;
    box-shadow: ${props => props.theme.shadow};
    z-index: 99;
  }
`;

const NavLink = styled.a`
  margin: 0 1rem;
  font-weight: 500;
  position: relative;
  font-family: "Andada Pro", serif;
  cursor: pointer;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${props => props.theme.primary};
    transition: width 0.3s ease;
  }
  
  &:hover:after {
    width: 100%;
  }
  
  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

const ThemeToggle = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
  cursor: pointer;
  font-size: 1.2rem;
  color: ${props => props.theme.text};
  
  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

const MenuIcon = styled.div`
  display: none;
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = ({ toggleTheme, currentTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    const yOffset = -80;
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    
    window.scrollTo({ top: y, behavior: 'smooth' });
    setIsMenuOpen(false);
  };
  
  return (
    <Nav>
      <Logo>VASUDEV</Logo>
      
      <MenuIcon onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </MenuIcon>
      
      <NavLinks isOpen={isMenuOpen}>
        <NavLink onClick={() => scrollToSection('about')}>About</NavLink>
        <NavLink onClick={() => scrollToSection('experience')}>Experience</NavLink>
        <NavLink onClick={() => scrollToSection('projects')}>Projects</NavLink>
        <NavLink onClick={() => scrollToSection('skills')}>Skills</NavLink>
        <NavLink onClick={() => scrollToSection('education')}>Education</NavLink>
        <NavLink onClick={() => scrollToSection('contact')}>Contact</NavLink>
        
        <ThemeToggle onClick={toggleTheme}>
          {currentTheme === 'light' ? <FaMoon /> : <FaSun />}
        </ThemeToggle>
      </NavLinks>
    </Nav>
  );
};

export default Header;