import styled from 'styled-components';
import PseudoElement from './PseudoElement';


const Container = styled(PseudoElement)`
  padding-left: ${props => props.pl || '2rem'};
  padding-right: ${props => props.pr || '2rem'};
`;


export default Container;