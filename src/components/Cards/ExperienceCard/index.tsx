import React, { ReactChild } from 'react';
import Avatar from '@components/Avatar';
import Text from '@components/Text';
import Heading from '@components/Headings';
import StyledCard from './styles';
import { IExperienceCard } from './types'
import Badge from '@/components/Badges';

const ProjectCard = (props: IExperienceCard) => {
  const {
    title,
    description,
    image,
    className,
    type,
    link
  } = props;

  const CardContent = () => {
    return (
      <>
        <Avatar as="img" src={image} w={['70px', '100px']} h={['70px', '100px']} border="1px solid #c8c8c8" rounded></Avatar>
        <Badge bg="primary" p="absolute" top="1rem" right="1rem">{type}</Badge>
        <Heading as="h2" className="title" ml="1rem">{title}</Heading> 
        <Text className="description">{description}</Text>
      </>
    )
  }

  const Card = (children: ReactChild) => (
    <StyledCard className={className}> {children} </StyledCard>
  )

  const CardWithLink = (children: ReactChild) => (
    <StyledCard className={className} as="a" href={link}>{children}</StyledCard>
  )

  return (
    link ? CardWithLink(CardContent()) : Card(CardContent())
  )
}

export default ProjectCard


