import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ExperienceSection = styled.section`
  padding: 6rem 0;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-family: "Andada Pro", serif;
  margin-bottom: 3rem;
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

const TimelineContainer = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  
  &:before {
    content: '';
    position: absolute;
    left: 50%;
    width: 2px;
    height: 100%;
    background: ${props => props.theme.primary};
    
    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  padding: 20px 30px;
  position: relative;
  width: 50%;
  background: transparent;
  
  &:nth-child(odd) {
    left: 0;
    
    @media (max-width: 768px) {
      width: calc(100% - 40px);
      left: 40px;
    }
  }
  
  &:nth-child(even) {
    left: 50%;
    
    @media (max-width: 768px) {
      width: calc(100% - 40px);
      left: 40px;
    }
  }
`;

const TimelineContent = styled.div`
  padding: 30px;
  background: ${props => props.theme.card};
  border-radius: 10px;
  box-shadow: ${props => props.theme.shadow};
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: calc(50% - 10px);
    width: 20px;
    height: 20px;
    background: ${props => props.theme.primary};
    border-radius: 50%;
    
    ${TimelineItem}:nth-child(odd) & {
      right: -60px;
      
      @media (max-width: 768px) {
        left: -60px;
      }
    }
    
    ${TimelineItem}:nth-child(even) & {
      left: -60px;
    }
  }
`;

const JobTitle = styled.h3`
  font-size: 1.5rem;
  font-family: "Andada Pro", serif;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.primary};
`;

const Company = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  font-family: "Andada Pro", serif;
  color: ${props => props.theme.text};
`;

const Period = styled.p`
  font-size: 0.9rem;
  font-family: "Andada Pro", serif;
  margin-bottom: 1rem;
  color: ${props => props.theme.text};
  opacity: 0.7;
`;

const Responsibilities = styled.ul`
  margin-left: 1.5rem;
  
  li {
    margin-bottom: 0.5rem;
    line-height: 1.6;
    font-family: "Andada Pro", serif;
  }
`;

const Experience = () => {
  return (
    <ExperienceSection id="experience">
      <SectionTitle>Experience</SectionTitle>
      <TimelineContainer>
        <TimelineItem
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <TimelineContent>
            <JobTitle>Front End Developer</JobTitle>
            <Company>Coursi Academy</Company>
            <Period>Nov 2023 - Feb 2025</Period>
            <Responsibilities>
              <li>Collaborated with design teams to integrate user interfaces into scalable web applications, boosting user satisfaction scores by 20%.</li>
              <li>Engineered a complex web system application software that increased customer conversion rates by 12%.</li>
              <li>Enhanced system accessibility and responsiveness, leading to a 10% increase in daily active users.</li>
              <li>Contributed to the selection and implementation of front end frameworks, significantly enhancing project workflow.</li>
            </Responsibilities>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <TimelineContent>
            <JobTitle>Front End Developer</JobTitle>
            <Company>UpMyRanks</Company>
            <Period>Sep 2022 - Oct 2023</Period>
            <Responsibilities>
              <li>Led a team of 5 in developing a high-performance single-page application using React.js and TypeScript, reducing load time by 30%.</li>
              <li>Optimized web application performance by integrating advanced JavaScript and TypeScript techniques, enhancing speed by 20%.</li>
              <li>Made ERP from PHP to React.js, making it 30% faster with improved page load times and smoother user experience.</li>
              <li>Implemented responsive and accessible design, ensuring compatibility across multiple devices and browsers, boosting user engagement by 25%.</li>
            </Responsibilities>
          </TimelineContent>
        </TimelineItem>
      </TimelineContainer>
    </ExperienceSection>
  );
};

export default Experience;