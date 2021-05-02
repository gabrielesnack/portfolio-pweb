import React, { ReactChild } from 'react';
import Avatar from '@components/Avatar';
import Text from '@components/Text';
import Heading from '@components/Headings';
import StyledCard from './styles';
import { IProjectCard } from './types'

const ProjectCard = (props: IProjectCard) => {
  const {
    title,
    description,
    image,
    className,
    link
  } = props;

  const CardContent = () => {
    return (
      <>
        <Avatar as="img" src={image} w={['70px', '100px']} h={['70px', '100px']} border="1px solid #c8c8c8" rounded></Avatar>
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