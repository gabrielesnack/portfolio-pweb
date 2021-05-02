import styled from 'styled-components';

const SocialButton = styled.a`
  background-color: #222;
  color: #fff;
  text-decoration: none;
  font-size: 2rem;
  font-family: 'Roboto, Regular'; 
  cursor: pointer;

  .fa-linkedin {
    padding:10px 14px;
    -o-transition:.5s;
    -ms-transition:.5s;
    -moz-transition:.5s;
    -webkit-transition:.5s;
    transition: .5s;
  }
  .fa-linkedin:hover {
    background-color: #0073a4;
  }

  .fa-github {
    padding:10px 14px;
    -o-transition:.5s;
    -ms-transition:.5s;
    -moz-transition:.5s;
    -webkit-transition:.5s;
    transition: .5s;
}
  .fa-github:hover {
    background-color: #5a32a3;
  }
`

export {
  SocialButton
}