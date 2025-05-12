import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

const HeroSection = styled.section`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    height: auto;
    padding: 6rem 0;
  }
`;

const HeroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    text-align: center;
  }
`;

const TextContainer = styled.div`
  flex: 1;
`;

const SubTitle = styled(motion.h3)`
  color: ${props => props.theme.primary};
  font-size: 1.5rem;
  font-family: "Andada Pro", serif;
  margin-bottom: 1rem;
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  font-family: "Andada Pro", serif;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  font-family: "Andada Pro", serif;
  margin-bottom: 2rem;
  color: ${props => props.theme.text};
  opacity: 0.8;
  max-width: 600px;
  line-height: 1.6;
`;

const CTAButton = styled(motion.a)`
  background-color: ${props => props.theme.primary};
  color: white;
  font-family: "Andada Pro", serif;
  padding: 0.8rem 2rem;
  border-radius: 5px;
  font-weight: 500;
  display: inline-block;
  margin-right: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.secondary};
    transform: translateY(-3px);
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialIcon = styled(motion.a)`
  background-color: ${props => props.theme.card};
  color: ${props => props.theme.primary};
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.theme.primary};
    color: white;
    transform: translateY(-3px);
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeroImage = styled(motion.div)`
  width: 350px;
  height: 350px;
  border-radius: 50%;
  background-color: ${props => props.theme.primary};
  background-image: linear-gradient(45deg, ${props => props.theme.primary}, ${props => props.theme.accent});
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
  
  &:before {
    content: 'V';
    font-size: 10rem;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.8);
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <TextContainer>
          <SubTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hello, I'm
          </SubTitle>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Vasudev
          </Title>
          <Description
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Passionate MERN Stack Developer with over 2 years of experience in building fast, 
            user-friendly web applications focused on creating smooth, accessible, and engaging user experiences.
          </Description>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <CTAButton href="#contact">Get In Touch</CTAButton>
            <CTAButton href="#projects" style={{ backgroundColor: 'transparent', color: '#4361EE', border: '1px solid #4361EE' }}>
              See My Work
            </CTAButton>
          </motion.div>
          <SocialIcons>
            <SocialIcon
              href="https://github.com/"
              target="_blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </SocialIcon>
            <SocialIcon
              href="https://www.linkedin.com/in/vasudev--"
              target="_blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedinIn />
            </SocialIcon>
            <SocialIcon
              href="mailto:vasudev.8847@gmail.com"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaEnvelope />
            </SocialIcon>
          </SocialIcons>
        </TextContainer>
        <ImageContainer>
          <HeroImage
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          />
        </ImageContainer>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
