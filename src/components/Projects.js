import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import youtube from '../assests/projects/youtube.png';
import ecommers from '../assests/projects/ecommer.png';
import erp from '../assests/projects/ERP.jpeg';
import academy from '../assests/projects/coursi .png';


const ProjectsSection = styled.section`
  padding: 6rem 0;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  position: relative;
  font-family: "Andada Pro", serif;
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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background-color: ${props => props.theme.card};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: ${props => props.theme.shadow};
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ProjectImage = styled.div`
  height: 200px;
  background-color: ${props => props.color || props.theme.primary};
  background-image: ${props => props.gradient || `linear-gradient(45deg, ${props.theme.primary}, ${props.theme.accent})`};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
  font-weight: bold;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.text};
  font-family: "Andada Pro", serif;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-family: "Andada Pro", serif;
  color: ${props => props.theme.text};
  opacity: 0.8;
  flex: 1;
`;

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
  gap: 0.5rem;
`;

const TechTag = styled.span`
  background-color: rgba(67, 97, 238, 0.1);
  color: ${props => props.theme.primary};
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-family: "Andada Pro", serif;
  font-size: 0.8rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  font-family: "Andada Pro", serif;
  gap: 0.5rem;
  color: ${props => props.theme.primary};
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.secondary};
  }
`;

const ProjectFilter = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const FilterButton = styled.button`
  background-color: ${props => props.active ? props.theme.primary : 'transparent'};
  color: ${props => props.active ? 'white' : props.theme.text};
  border: 1px solid ${props => props.theme.primary};
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  cursor: pointer;
  font-family: "Andada Pro", serif;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.active ? props.theme.primary : 'rgba(67, 97, 238, 0.1)'};
  }
`;

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      id: 1,
      title: 'School ERP System',
      description: 'Transformed a PHP-based ERP system to React.js, resulting in 30% faster load times. Implemented modules for teachers, students, and parents with features like timetable management, homework tracking, and fee payment.',
      image: `${erp}`,
      gradient: 'linear-gradient(45deg, #4361EE, #4CC9F0)',
      tech: ['React.js', 'TypeScript', 'styled-components'],
      category: 'web',
      github: '#',
      live: '#'
    },
    {
      id: 2,
      title: 'Coursi Academy Website',
      description: 'Built a user-friendly website for Coursi Academy using HTML, Tailwind CSS, and JavaScript. Features include course details pages, Excel data storage for form submissions, demo booking, enrollment, and course reviews.',
      image: `${academy}`,
      gradient: 'linear-gradient(45deg, #3F37C9, #4361EE)',
      tech: ['HTML', 'Tailwind CSS', 'JavaScript', 'Excel Integration'],
      category: 'web',
      github: '#',
      live: 'https://www.coursi.in/'
    },
    {
      id: 3,
      title: 'E-commerce',
      description: 'Developed a comprehensive dashboard for e-commerce business with analytics, inventory management, and order tracking. Implemented real-time data visualization and responsive design for seamless mobile access.',
      image: `${ecommers}`,
      gradient: 'linear-gradient(45deg, #4CC9F0, #4895EF)',
      tech: ['React.js', 'Redux', 'Node.js', 'MongoDB' , 'Express.js' , 'styled-components'],
      category: 'dashboard',
      github: 'https://github.com/VasuDev884/E-commerce.git',
      live: 'https://ecommers-mern.vercel.app/'
    },
    {
      id: 4,
      title: 'YouTube Clone',
      description: 'I built a YouTube clone using the YouTube API that allows users to browse and filter videos by categories such as Trending, Music, Movies, Gaming, News, and Sports. Users can watch videos directly within the app and view comments for each video, providing a seamless and familiar YouTube-like experience.',
      image: `${youtube}`,
      gradient: 'linear-gradient(45deg, #7209B7, #4361EE)',
      tech: ['React.js', 'redux', 'YouTube API', 'tailwind CSS'],
      category: 'app',
      github: 'https://github.com/abhimanyuspark/youtube.git',
      live: 'https://youtube-rose-one.vercel.app/'
    }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  return (
    <ProjectsSection id="projects">
      <SectionTitle>My Projects</SectionTitle>
      
      <ProjectFilter>
        <FilterButton 
          active={filter === 'all'} 
          onClick={() => setFilter('all')}
        >
          All
        </FilterButton>
        <FilterButton 
          active={filter === 'web'} 
          onClick={() => setFilter('web')}
        >
          Web Apps
        </FilterButton>
        <FilterButton 
          active={filter === 'dashboard'} 
          onClick={() => setFilter('dashboard')}
        >
          Dashboards
        </FilterButton>
        <FilterButton 
          active={filter === 'app'} 
          onClick={() => setFilter('app')}
        >
          Applications
        </FilterButton>
      </ProjectFilter>
      
      <ProjectsGrid>
        {filteredProjects.map(project => (
          <ProjectCard 
            key={project.id}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <ProjectImage gradient={project.gradient}>
              <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </ProjectImage>
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectTech>
                {project.tech.map((tech, index) => (
                  <TechTag key={index}>{tech}</TechTag>
                ))}
              </ProjectTech>
              <ProjectLinks>
                <ProjectLink href={project.github} target="_blank">
                  <FaGithub /> Code
                </ProjectLink>
                <ProjectLink href={project.live} target="_blank">
                  <FaExternalLinkAlt /> Live Demo
                </ProjectLink>
              </ProjectLinks>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
};

export default Projects;
