import styled from "styled-components"

const BannerTitle = styled.h2`
  font-family: Impact, fantasy;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${ props => props.theme.colors['base-light'] };

  &:hover {
    color: ${ props => props.theme.colors.primary } ;
    text-shadow: 1px 1px #000;
    -webkit-transition: all .5s ease-in-out;
    -moz-transition: all .5s ease-in-out;
    -o-transition: all .5s ease-in-out;
    transition: all .5s ease-in-out;
  }
`

export default BannerTitle