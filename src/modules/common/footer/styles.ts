import styled from 'styled-components';
import PseudoElement from '@/components/PseudoElement';


const Footer = styled(PseudoElement).attrs({
  "as": 'footer'
})`
  display:flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 4rem;
  background-color: #222;

  a:first-child {
    margin-right: 1rem;
  }
`

export {
  Footer
};