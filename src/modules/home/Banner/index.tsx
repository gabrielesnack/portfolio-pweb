import React from "react";
import styled from 'styled-components';
import StyledBanner from '@components/Banners/';
import BannerTitle from '~/components/Banners/BannerTitle';
import BannerDescription from '~/components/Banners/BannerDescription';
import BannerAvatar from '~/components/Banners/BannerAvatar';
import Badge from '~/components/Badges';

import { StyledBannerGrid, StyledBannerButton } from './style';

import Avatar from '@assets/gabrielesnack.jpg';

export default () => {
  return (
    <StyledBanner as="section" bg="#222" aria-label="Banner">
      <StyledBannerGrid aria-label="Main content about Gabriel Esnack">
        <BannerTitle as="h1" className="title">
          Hello, I'm Gabriel Esnack 
          <Badge bg="primary">Frontend Developer</Badge>
        </BannerTitle>
        <BannerAvatar src={Avatar} className="avatar" />
        <BannerDescription className="description">
          I am an enthusiast about technology and I would intend to explore several technologies to create or developer what is beyond my understanding.
        </BannerDescription>
        <StyledBannerButton as="a" href="#PROJECTS" aria-label="Click here to see more informations about Gabriel Esnack">
          Show More
        </StyledBannerButton>
      </StyledBannerGrid>
      
    </StyledBanner>
  )
}

