import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import * as THREE from 'three';
import MyImg from '../assests/2ndcopy.png';

// ThreeDBackground Component
const ThreeDBackground = () => {
  const mountRef = useRef(null);
  
  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);
    
    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    
    const posArray = new Float32Array(particlesCount * 3);
    
    // Fill positions array with random values
    for(let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 5;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    // Create material
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: '#4361EE',
      transparent: true,
      opacity: 0.8,
    });
    
    // Create points
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    // Position camera
    camera.position.z = 2;
    
    // Mouse movement effect
    let mouseX = 0;
    let mouseY = 0;
    
    const handleMouseMove = (event) => {
      mouseX = event.clientX / window.innerWidth - 0.5;
      mouseY = event.clientY / window.innerHeight - 0.5;
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Rotate particles slowly
      particlesMesh.rotation.y += 0.002;
      
      // Move particles based on mouse position with dampening
      particlesMesh.rotation.x += (mouseY * 0.02 - particlesMesh.rotation.x) * 0.05;
      particlesMesh.rotation.y += (mouseX * 0.02 - particlesMesh.rotation.y) * 0.05;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', handleMouseMove);
      
      // Check if mountRef.current exists before trying to remove child
      if (mountRef.current && mountRef.current.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      particlesGeometry.dispose();
      particlesMaterial.dispose();
    };
  }, []);
  
  return (
    <div 
      ref={mountRef} 
      style={{ 
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -10,
        pointerEvents: 'none'
      }}
    />
  );
};

// Hero Component Styles
const HeroSection = styled.section`
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  
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
  width: 100%;
  max-width: 1200px;
  padding: 0 2rem;
  position: relative;
  z-index: 5;
  
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
  text-shadow: 0 0 15px rgba(67, 97, 238, 0.15);
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
    box-shadow: 0 7px 14px rgba(67, 97, 238, 0.2);
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
    box-shadow: 0 5px 10px rgba(67, 97, 238, 0.25);
  }
`;

const ImageContainer = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 20px;
  
  &::before {
    content: '';
    position: absolute;
    top: 40px;
    left: 40px;
    width: 40px;
    height: 40px;
    border-top: 5px solid ${props => props.theme.primary};
    border-left: 5px solid ${props => props.theme.primary};
    z-index: 0;
    opacity: 0.6;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 40px;
    right: 40px;
    width: 40px;
    height: 40px;
    border-bottom: 5px solid ${props => props.theme.primary};
    border-right: 5px solid ${props => props.theme.primary};
    z-index: 0;
    opacity: 0.6;
  }
`;

const BackgroundShape = styled.div`
  position: absolute;
  width: 380px;
  height: 380px;
  background: linear-gradient(135deg, ${props => props.theme.primary} 0%, ${props => props.theme.accent} 100%);
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  z-index: -1;
  opacity: 0.15;
  transform: scale(1.2) rotate(-10deg);
  animation: morph 8s ease-in-out infinite;
  
  @keyframes morph {
    0% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
    25% { border-radius: 70% 30% 50% 50% / 40% 60% 40% 60%; }
    50% { border-radius: 50% 50% 30% 70% / 60% 30% 70% 40%; }
    75% { border-radius: 60% 40% 40% 60% / 50% 50% 50% 50%; }
    100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
  }
  
  @media (max-width: 768px) {
    width: 280px;
    height: 280px;
  }
`;

const ProfileImage = styled(motion.div)`
  width: 340px;
  height: auto;
  position: relative;
  z-index: 1;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    filter: drop-shadow(0 10px 15px rgba(0, 0, 0, 0.15));
    transition: transform 0.5s ease;
  }
  
  &:hover img {
    transform: scale(1.03);
  }
  
  @media (max-width: 768px) {
    width: 260px;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 70%;
    height: 20px;
    background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0) 70%);
    border-radius: 50%;
    z-index: -1;
  }
`;

// Combined Hero Component with ThreeDBackground
const Hero = () => {
  return (
    <HeroSection>
      {/* ThreeDBackground will render behind everything else */}
      <ThreeDBackground />
      
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
        <ImageContainer
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <BackgroundShape />
          <ProfileImage
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.8,
              type: "spring",
              stiffness: 100
            }}
          >
            <img 
              src={MyImg} 
              alt="Vasudev - MERN Stack Developer" 
            />
          </ProfileImage>
        </ImageContainer>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;