import styled from 'styled-components';
import PseudoElement from './PseudoElement';

const Avatar = styled(PseudoElement).attrs({
  "as": "img"
})<{
  rounded?: boolean,
  border?: string
}>`
  border: ${props => props.border};
  border-radius: ${props => props.rounded ? '50%' : 0};
`


export default Avatar;