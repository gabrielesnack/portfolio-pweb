import React from 'react';
import Container from '@components/Container';
import Heading from '@components/Headings';
import ProjectCard from '@components/Cards/ProjectCard';
import { StyledGrid } from './styles';

const MyProjects = () => {
  return (
    <Container as="section" aria-label="Meus Projetos" id="PROJECTS">
      <StyledGrid>
        <Heading as="h2" w="100%" mt={['4rem']} mb="2rem" 
          textAlign={['center', null, 'left']}>
            Projects
        </Heading>

        <ProjectCard 
          className="project"
          title="Angular Seed"
          description="Clean structure / boilerplate to create large apps with angular and work with squads."
          image="img/Angular.png"
          link="https://github.com/gabrielesnack/angular-seed"
        />

        <ProjectCard 
          className="project"
          title="POC with Next.js"
          description="A simple project to understand how does framework work and how could I use this framework to improve SEO, Perfomance and reduces development time."
          image="img/nextjs.png"
          link="https://github.com/gabrielesnack/poc-next-chakra"
        />

        <ProjectCard 
          className="project"
          title="Portfólio"
          description="The project aim using just react.js and styled components to increase my skills and my understand about them."
          image="img/logo192.png"
        />
      </StyledGrid>
      
    </Container>
  )
} 


export default MyProjects;