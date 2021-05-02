import styled from "styled-components";

const BannerAvatar = styled.img`
  width: 60%;
  border-radius: 50%;
  margin-bottom: 1rem;
  border-style: groove;
  border: 2px solid ${props => props.theme.colors.primary};

  @media screen and (min-width: ${props => props.theme.breakpoints.md}) {
    width: auto;
  }
`

export default BannerAvatar;