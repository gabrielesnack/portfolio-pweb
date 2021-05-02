import React from 'react';
import Container from '@components/Container';
import Heading from '@components/Headings';
import ExperienceCard from '@components/Cards/ExperienceCard';
import { StyledGrid } from './styles';

const PersonalInformation = () => {
  return (
    <Container as="section" aria-label="Meus Projetos">
      <StyledGrid>
        <Heading as="h2" w="100%" mt={['4rem']} mb="2rem" 
          textAlign={['center', null, 'left']}>
            Experience and Education
        </Heading>

        <ExperienceCard 
          className="project"
          type="Experience"
          title="Burh"
          description="I started my career at BURH where I could learn really much things about frontend development such as good practices like BEM, Mobile First, How could I improve perfomance and another things."
          image="img/burh.png"
          link="https://www.burh.com.br/"
        />

        <ExperienceCard 
          className="project"
          type="Experience"
          title="Avivatec"
          description="I have been worked at avivatec for five months and I could learn how does work with a big squads and then thinking about it, I started to angular seed/boilerplate."
          image="img/avivatec.jpg"
          link="https://www.avivatec.com.br/"
        />

        <ExperienceCard 
          className="project"
          type="Education"
          title="Fatec"
          description="When I joined at university I could meet several people and create a big network that help me really much at my career and in my life."
          image="img/fatec.png"
          link="http://www.fatecsorocaba.edu.br/"
        />

        <ExperienceCard 
          className="project"
          type="Education"
          title="Etec"
          description="Where my passion about development started grow up. I could learn a little bit about several technologies like, c#, android, php, and js."
          image="img/etec.jpg"
          link="https://www.etecvotorantim.com.br/"
        />
      </StyledGrid>
      
    </Container>
  )
} 


export default PersonalInformation;