import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCode, FaLaptopCode, FaUsers, FaRocket } from 'react-icons/fa';

const AboutSection = styled.section`
  padding: 6rem 0;
  id: "about";
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  font-family: "Andada Pro", serif;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60%;
    height: 4px;
    background-color: ${props => props.theme.primary};
  }
`;

const AboutContent = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const AboutText = styled.div`
  flex: 1;
`;

const AboutParagraph = styled.p`
  font-size: 1.1rem;
  font-family: "Andada Pro", serif;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.text};
  opacity: 0.9;
`;

const Stats = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled(motion.div)`
  background-color: ${props => props.theme.card};
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: ${props => props.theme.shadow};
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const StatIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background-color: rgba(67, 97, 238, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.primary};
  font-size: 1.5rem;
`;

const StatContent = styled.div`
  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: ${props => props.theme.primary};
    font-family: "Andada Pro", serif;
  }
  
  p {
    font-size: 0.9rem;
    opacity: 0.8;
    font-family: "Andada Pro", serif;
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <SectionTitle>About Me</SectionTitle>
      <AboutContent>
        <AboutText>
          <AboutParagraph>
            I'm a passionate MERN Stack Developer with over 2 years of experience specializing in building 
            fast, user-friendly web applications. My expertise lies in HTML, CSS, JavaScript, TypeScript, 
            React.js, MongoDB, and Node.js.
          </AboutParagraph>
          <AboutParagraph>
            What drives me is creating smooth, accessible, and engaging user experiences that make a real 
            difference. I enjoy working with teams to develop scalable solutions that improve performance 
            and usability, and I'm always looking for new challenges that push my skills to the next level.
          </AboutParagraph>
          <AboutParagraph>
            Throughout my career at UpMyRanks and Coursi Academy, I've successfully led teams, optimized 
            web application performance, implemented responsive designs, and collaborated with design teams 
            to create user interfaces that boost satisfaction and conversion rates.
          </AboutParagraph>
        </AboutText>
        <Stats>
          <StatCard
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <StatIcon>
              <FaCode />
            </StatIcon>
            <StatContent>
              <h3>2+</h3>
              <p>Years Experience</p>
            </StatContent>
          </StatCard>
          <StatCard
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <StatIcon>
              <FaLaptopCode />
            </StatIcon>
            <StatContent>
              <h3>10+</h3>
              <p>Projects Completed</p>
            </StatContent>
          </StatCard>
          <StatCard
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <StatIcon>
              <FaUsers />
            </StatIcon>
            <StatContent>
              <h3>5+</h3>
              <p>Team Members Led</p>
            </StatContent>
          </StatCard>
          <StatCard
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <StatIcon>
              <FaRocket />
            </StatIcon>
            <StatContent>
              <h3>30%</h3>
              <p>Performance Boost</p>
            </StatContent>
          </StatCard>
        </Stats>
      </AboutContent>
    </AboutSection>
  );
};

export default About;