import styled from 'styled-components';
import Card from '@components/Cards/';

const StyledCard = styled(Card)`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto auto;
  padding-bottom: 1rem;
  cursor: pointer;
  text-decoration: none;
  color: ${props => props.theme.colors.black};
  

  .title {
    display: flex;
    justify-content: start;
    align-items: center;
    text-align: center;
  }

  .description {
    grid-column: 1/3;
    margin-top: 1rem;
    text-align: justify;
  }


  @media screen and (min-width: ${props => props.theme.breakpoints.sm}) {
    .title {
      justify-content: start;
      text-align: left;
    }
  }
`

export default StyledCard;