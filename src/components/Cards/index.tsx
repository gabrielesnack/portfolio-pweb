import styled from 'styled-components';

const Card = styled.div`
  width: 100%;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  background-color: ${props => props.theme.colors.white};
  border: 1px solid #e5e5e5;
  border-radius: 7px;
  box-shadow: 0 1px 1px 0 rgb(0 0 0 / 15%);

  &:hover {
    box-shadow: 0 0 2rem 0 rgb(136 152 170 / 15%);
    transition: all .25s ease-in-out;
    transform: translateY(-.25rem);
  }
`


export default Card;