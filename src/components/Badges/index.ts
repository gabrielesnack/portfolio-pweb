import styled from 'styled-components';
import PseudoElement from '../PseudoElement';

const Badge = styled(PseudoElement).attrs({
  as: "span"
})<{ bg: string }>`
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: .25rem;
  padding-bottom: .25rem;
  font-size: 1rem;
  font-family: 'Roboto, Regular';
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors[props.bg]};
  border-radius: 23px;
`


export default Badge;