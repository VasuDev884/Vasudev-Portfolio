import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, 
  FaDatabase, FaGitAlt, FaUsers, FaMobile, FaServer 
} from 'react-icons/fa';

const SkillsSection = styled.section`
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

const SkillsContainer = styled.div`
  margin-top: 3rem;
`;

const SkillsCategory = styled.div`
  margin-bottom: 3rem;
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.text};
  font-family: "Andada Pro", serif;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const SkillCard = styled(motion.div)`
  background-color: ${props => props.theme.card};
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: ${props => props.theme.shadow};
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const SkillIcon = styled.div`
  font-size: 2rem;
  color: ${props => props.theme.primary};
`;

const SkillInfo = styled.div`
  flex: 1;
`;

const SkillName = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.text};
  font-family: "Andada Pro", serif;
`;

const SkillLevel = styled.div`
  height: 8px;
  background-color: ${props => props.theme.border};
  border-radius: 4px;
  overflow: hidden;
`;

const SkillProgress = styled.div`
  height: 100%;
  width: ${props => props.level}%;
  background-color: ${props => props.theme.primary};
  border-radius: 4px;
`;

const Skills = () => {
  const technicalSkills = [
    { name: 'HTML5', icon: <FaHtml5 />, level: 95 },
    { name: 'CSS3/Tailwind', icon: <FaCss3Alt />, level: 90 },
    { name: 'JavaScript', icon: <FaJs />, level: 85 },
    { name: 'React.js', icon: <FaReact />, level: 90 },
    { name: 'Node.js', icon: <FaNodeJs />, level: 75 },
    { name: 'MongoDB', icon: <FaDatabase />, level: 70 },
  ];
  
  const professionalSkills = [
    { name: 'UI/UX Design', icon: <FaMobile />, level: 85 },
    { name: 'API Integration', icon: <FaServer />, level: 80 },
    { name: 'Git/Version Control', icon: <FaGitAlt />, level: 75 },
    { name: 'Team Leadership', icon: <FaUsers />, level: 85 },
  ];
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };
  
  return (
    <SkillsSection id="skills">
      <SectionTitle>My Skills</SectionTitle>
      
      <SkillsContainer>
        <SkillsCategory>
          <CategoryTitle>Technical Skills</CategoryTitle>
          <SkillsGrid as={motion.div} variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
            {technicalSkills.map((skill, index) => (
              <SkillCard key={index} variants={item}>
                <SkillIcon>{skill.icon}</SkillIcon>
                <SkillInfo>
                  <SkillName>{skill.name}</SkillName>
                  <SkillLevel>
                    <SkillProgress level={skill.level} />
                  </SkillLevel>
                </SkillInfo>
              </SkillCard>
            ))}
          </SkillsGrid>
        </SkillsCategory>
        
        <SkillsCategory>
          <CategoryTitle>Professional Skills</CategoryTitle>
          <SkillsGrid as={motion.div} variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
            {professionalSkills.map((skill, index) => (
              <SkillCard key={index} variants={item}>
                <SkillIcon>{skill.icon}</SkillIcon>
                <SkillInfo>
                  <SkillName>{skill.name}</SkillName>
                  <SkillLevel>
                    <SkillProgress level={skill.level} />
                  </SkillLevel>
                </SkillInfo>
              </SkillCard>
            ))}
          </SkillsGrid>
        </SkillsCategory>
      </SkillsContainer>
    </SkillsSection>
  );
};

export default Skills;
