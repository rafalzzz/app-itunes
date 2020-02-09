import styled from 'styled-components';

export const FooterContainer = styled.div`
      background-color: #2d2d2d;
      height: 45px;
      margin-top: 100px;
      color: #ffffff;
      padding-top: 20px;
      padding-left: 15px;
      padding-right: 5px;

    .Title {
      font-size: 1.2em;
      font-family: Lato;
      font-weight: 100;
      margin-left: 0px;
      padding-left: 15px;
      padding-right: 10px;
    }

    @font-face {
      font-family: 'Lato', sans-serif;
      src: url(https://fonts.googleapis.com/css?family=Lato:100i,300,400,700i&display=swap);
    }

    @media only screen and (max-width: 1000px) {
      margin-top: 32px;
      padding-left: 5px;
      }
  `