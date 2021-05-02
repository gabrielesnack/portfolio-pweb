import React from 'react';
import * as S from './styles';
import SocialButton from '@/components/SocialButton';

const Footer = () => {

  const redirectTo = (to: string) => {
    window.location.href = to;
  }

  return (
    <S.Footer>
      <SocialButton type="linkedin" onHandleClick={() => redirectTo('https://www.linkedin.com/in/gabriel-esnack')}></SocialButton>
      <SocialButton type="github" onHandleClick={() => redirectTo('https://github.com/gabrielesnack')}></SocialButton>
    </S.Footer>
  )
}

export default Footer;