import styled from 'styled-components';

const StyledGrid = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 4rem;
  
  .project {
    margin-bottom: 1rem;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.md}) {
    flex-flow: wrap;
    flex-direction: row;
    justify-content: space-between;
    
    .project {
      max-width: calc(50% - 1rem);
    }
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.lg}) {
    .project {
      max-width: calc(33.333% - 1rem);
    }
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.xl}) {
    max-width: ${props => props.theme.breakpoints.xl};
    margin-left: auto;
    margin-right: auto;
  }
`;


export {
  StyledGrid
}