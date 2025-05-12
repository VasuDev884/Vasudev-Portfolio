import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';

const EducationSection = styled.section`
  padding: 6rem 0;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  position: relative;
  display: inline-block;
  font-family: "Andada Pro", serif;
  
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

const EducationContainer = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  
  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

const EducationCard = styled(motion.div)`
  background-color: ${props => props.theme.card};
  border-radius: 10px;
  padding: 2rem;
  box-shadow: ${props => props.theme.shadow};
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const EducationHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const IconContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgba(67, 97, 238, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.primary};
  font-size: 1.5rem;
`;

const EducationTitle = styled.h3`
  font-size: 1.3rem;
  color: ${props => props.theme.text};
  font-family: "Andada Pro", serif;
`;

const EducationInfo = styled.div`
  flex: 1;
`;

const Institution = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.primary};
  font-family: "Andada Pro", serif;
`;

const Period = styled.p`
  font-size: 0.9rem;
  margin-bottom: 1rem;
  font-family: "Andada Pro", serif;
  color: ${props => props.theme.text};
  opacity: 0.7;
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  font-family: "Andada Pro", serif;
  color: ${props => props.theme.text};
  opacity: 0.9;
`;

const Education = () => {
  return (
    <EducationSection id="education">
      <SectionTitle>Education & Certification</SectionTitle>
      
      <EducationContainer>
        <EducationCard
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <EducationHeader>
            <IconContainer>
              <FaGraduationCap />
            </IconContainer>
            <EducationTitle>B.Tech in Mechanical Engineering</EducationTitle>
          </EducationHeader>
          <EducationInfo>
            <Institution>Punjabi University</Institution>
            <Period>July 2018 - July 2021</Period>
            <Description>
              Completed Bachelor of Technology in Mechanical Engineering, gaining strong analytical and problem-solving skills that complement my current role as a developer.
            </Description>
          </EducationInfo>
        </EducationCard>
        
        <EducationCard
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <EducationHeader>
            <IconContainer>
              <FaGraduationCap />
            </IconContainer>
            <EducationTitle>Diploma in Mechanical Engineering</EducationTitle>
          </EducationHeader>
          <EducationInfo>
            <Institution>Bhai Gurdas Global Polytechnic College</Institution>
            <Period>July 2014 - July 2017</Period>
            <Description>
              Earned a diploma in Mechanical Engineering, developing a foundation in technical skills and engineering principles.
            </Description>
          </EducationInfo>
        </EducationCard>
        
        <EducationCard
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <EducationHeader>
            <IconContainer>
              <FaCertificate />
            </IconContainer>
            <EducationTitle>MERN Stack Development</EducationTitle>
          </EducationHeader>
          <EducationInfo>
            <Institution>Besant Technologies</Institution>
            <Period>April 2022 - December 2022</Period>
            <Description>
              Comprehensive certification in MongoDB, Express.js, React.js, and Node.js, gaining hands-on experience in building full-stack web applications.
            </Description>
          </EducationInfo>
        </EducationCard>
        
        <EducationCard
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <EducationHeader>
            <IconContainer>
              <FaCertificate />
            </IconContainer>
            <EducationTitle>Full-Stack Web Developer</EducationTitle>
          </EducationHeader>
          <EducationInfo>
            <Institution>Udemy</Institution>
            <Period>2022</Period>
            <Description>
              Certification covering HTML, CSS, JavaScript, Node, React, PostgreSQL, and Web3 technologies, with an emphasis on modern web development practices.
            </Description>
          </EducationInfo>
        </EducationCard>
      </EducationContainer>
    </EducationSection>
  );
};

export default Education;