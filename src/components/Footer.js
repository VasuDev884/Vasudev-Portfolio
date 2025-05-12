import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.card};
  padding: 3rem 0;
  margin-top: 4rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FooterLogo = styled.div`
  font-size: 2rem;
  font-weight: 700;
  font-family: "Andada Pro", serif;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.primary};
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  
  @media (max-width: 500px) {
    gap: 1rem;
  }
`;

const FooterLink = styled.a`
  color: ${props => props.theme.text};
  font-weight: 500;
  font-family: "Andada Pro", serif;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    color: ${props => props.theme.primary};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const SocialLink = styled.a`
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.primary};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.primary};
    color: white;
    transform: translateY(-3px);
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme.text};
  opacity: 0.7;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLogo>VASUDEV</FooterLogo>
        
        <FooterLinks>
          <FooterLink href="#about">About</FooterLink>
          <FooterLink href="#experience">Experience</FooterLink>
          <FooterLink href="#projects">Projects</FooterLink>
          <FooterLink href="#skills">Skills</FooterLink>
          <FooterLink href="#education">Education</FooterLink>
          <FooterLink href="#contact">Contact</FooterLink>
        </FooterLinks>
        
        <SocialLinks>
          <SocialLink href="https://github.com/" target="_blank">
            <FaGithub />
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/vasudev--" target="_blank">
            <FaLinkedinIn />
          </SocialLink>
          <SocialLink href="mailto:vasudev.8847@gmail.com">
            <FaEnvelope />
          </SocialLink>
        </SocialLinks>
        
        <Copyright>
          &copy; {new Date().getFullYear()} Vasudev. All rights reserved.
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;