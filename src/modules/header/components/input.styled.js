import styled from 'styled-components';

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 204px;
    width: 100vw;
    background-color: #2d2d2d;
    font-family: Lato;
    text-align: center;
    margin-top: 0px;
    box-sizing: border-box;

.title {
    font-size: 1.6em;
    font-weight: 500;
    letter-spacing: 1px;
    color: #fffefe;
    margin-top: 20px;
}

form {
    display: inline-block;
}

input[type=text] {
    background-color: #f0f0f0;
    color: #464545;
    width: 170px;
    height: 40px;
    font-family: Lato;
    font-size 1.046em;
    border: none;
    border-radius: 20px 0px 0px 20px;
    padding-left: 20px;
}

input[type=text]:focus {
    border: none;
    outline: none;
}

input[type=text]:active {
    border: none;
    outline: none;
}

input[type=text]:hover {
    border: none;
    outline: none;
}

button {
    width: 80px;
    height: 42px;
    border: none;
    cursor: pointer;
    background-color: #f7941d;
    color: #ffffff;
    font-family: Lato;
    font-size: 0.915em;
    font-weight: 300;
    border-radius: 0px 20px 20px 0px;
    padding-right: 15px;
    padding-top: 2.8px;
}

button:focus {
    border: none;
    outline: none;
}

button:active {
    border: none;
    outline: none;
}

button:hover {
    border: none;
    outline: none;
}

.footer {
    color: #ffffff;
    font-size: 1em;
    font-family: Lato;
    margin-top: 30px;
    font-weight: 100;
}

@font-face {
    font-family: 'Lato', sans-serif;
    src: url(https://fonts.googleapis.com/css?family=Lato:100i,300,400,700i&display=swap);
}

@media only screen and (max-width: 1000px) {
    width: 100%;

    .title {
        margin-top: 28px;
        letter-spacing: 0px;
    }

    input[type=text] {
        width: 180px;
    }

    .footer {
        font-size: 0.95em;
        margin-top: 25px;
        padding: 0px 40px;
    }
    }
  `