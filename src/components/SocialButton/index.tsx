import React from 'react';
import * as S from './styles';
import { ISocialButton } from './types';


const SocialButton = (props: ISocialButton) => {
  const { type, onHandleClick } = props;
  return (
    <S.SocialButton onClick={ () => onHandleClick && onHandleClick()}>
      <i className={`fa fa-${type}`}></i>
    </S.SocialButton>
  )
}

export default SocialButton;