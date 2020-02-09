import styled from 'styled-components';

export const ListItemsContainer = styled.div`
    letter-spacing: 0.1px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 14px;
    width: 980px;
    transform: translate(-50%);
    margin-left: 50%;
    flex-wrap: wrap;
    height: calc(100vh - 446px);

  .ItemContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 298px;
    height: 138px;
    background-color: #f0f0f0;
    margin-left: 10px;
    margin-right: 10.5px;
    margin-bottom: 27px;
  }

  .icon {
    width: 100px;
    height: 100px;
    margin-left: 17.5px;
    margin-top: 4px;
    margin-right: 29.5px;
    background-color: #000000;
    -webkit-box-shadow: 0px 0px 117px -42px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 117px -42px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 117px -42px rgba(0,0,0,0.75);
  }

  .itemInfo {
    height: 100px;
    /* background-color: #ffffff; */
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 14px;
  }

  .itemTitle {
    font-size: 1.1em;
    letter-spacing: 0px;
    font-family: Lato;
    font-weight: 500;
    margin-top: 7px;
    border-bottom: 1px solid #464545;
    padding-bottom: 5px;
  }

  .itemAuthor {
    font-size: 1em;
    font-family: Lato;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 4px;
  }

  @font-face {
    font-family: 'Lato', sans-serif;
    src: url(https://fonts.googleapis.com/css?family=Lato:100i,300,400,700i&display=swap);
}

  @media only screen and (max-width: 956px) {
    width: 100vw;
    height: auto;
    }

    .ItemContainer {
      margin-bottom: 29px;
    }
  `