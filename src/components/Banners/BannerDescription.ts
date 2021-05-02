import styled from "styled-components"

const BannerDescription = styled.p`
  font-family: 'Roboto, Regular';
  font-size: 1rem;
  color: ${ props => props.theme.colors['light-gray']  };
  text-align: justify;

  &:hover {
    color: ${ props => props.theme.colors.primary } ;
    text-shadow: 1px 1px #000;
    -webkit-transition: all .5s ease-in-out;
    -moz-transition: all .5s ease-in-out;
    -o-transition: all .5s ease-in-out;
    transition: all .5s ease-in-out;
  }
`

export default BannerDescription