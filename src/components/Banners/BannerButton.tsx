import styled, { keyframes } from "styled-components";

const BannerButton = styled.button`
  position: relative;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  min-width: 200px;
	text-align: center;
  font-family: 'Roboto, Regular';
  color: #FFF;
  background-color: transparent;
  border: 0;
	transition: all 0.5s;
	cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 23px;
    z-index: 1;
    background-color: rgba(255,255,255,0.1);
    transition: all 0.3s;
  }
  &:hover::before {
    opacity: 0 ;
    transform: scale(0.5,0.5);
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 23px;
    z-index: 1;
    opacity: 0;
    transition: all 0.3s;
    border: 1px solid rgba(255,255,255,0.5);

    @media screen and (min-width: ${props => props.theme.breakpoints.md}) {
      transform: scale(1.2,1.2);
    }    
  }
  &:hover::after {
    opacity: 1;
    transform: scale(1,1);
  }


`

export default BannerButton;
