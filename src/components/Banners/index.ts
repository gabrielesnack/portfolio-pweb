import styled from 'styled-components';

const Banner = styled.div<{ bg: string }>`
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.colors[props.bg] || props.bg};
`;

export default Banner;