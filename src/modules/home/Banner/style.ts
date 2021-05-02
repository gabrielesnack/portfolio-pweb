import styled from "styled-components"
import BannerButton from '~/components/Banners/BannerButton';

const StyledBannerButton = styled(BannerButton)`
  position: absolute;
  bottom: 10%;
  width: calc(100% - 4rem);
  text-decoration: none;

  @media screen and (min-width: ${props => props.theme.breakpoints.md}) {
    left: 50%;
    width: auto;
    transform: translateX(-50%);
  }

`;

const StyledBannerGrid = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 2rem;

  .title {
    span {
      display: block;
      width: max-content;
      margin-top: 1rem;
      margin-left: auto;
      margin-right: auto;
      text-align: center;
    }
  }

  .description {
    margin-bottom: 1rem;
  }

  .btn__showmore {
    position: absolute;
    bottom: 10%;
    left:50%;
    transform: translateX(-50%);
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.md}) {
    display: grid;
    grid-template-columns: .75fr 1fr;
    grid-template-rows: 1fr 1fr;

    .title {
      align-self: flex-end;
      padding-left: 1rem;
      font-size: 2.5rem;

      span {
        display: inline;
        margin-left: 1rem;
        vertical-align: middle;
      }
    }

    .description {
      width: 50%;
      align-self: flex-start;
      padding-left: 1rem;
      font-size: 1.25rem;
    }

    .avatar {
      order: -1;
      grid-row: 1/3;
      grid-column: 1/1;
      justify-self: end;
      margin-right: 1rem;
    }
  }
`

export {
  StyledBannerGrid,
  StyledBannerButton
}