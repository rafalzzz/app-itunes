import styled from 'styled-components';

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 27px;
    
    .btnL {
        width: 87px;
        height: 27px;
        color: #ffffff;
        font-size: 1em;
        font-family: Lato;
        background-color: #f7941d;
        border: none;
        border-radius: 10px;
        margin-top: 0px;
        margin-right: 3px;
        margin-left: 14px;
    }

    .btnL:focus {
        border: none;
        outline: none;
    }
    
    .btnL:active {
        border: none;
        outline: none;
    }
    
    .btnL:hover {
        border: none;
        outline: none;
    }

    .btnR {
        width: 87px;
        height: 27px;
        color: #ffffff;
        font-size: 1em;
        font-family: Lato;
        background-color: #f7941d;
        border: none;
        border-radius: 10px;
        margin-top: 0px;
        margin-left: 2px;
    }

    .btnR:focus {
        border: none;
        outline: none;
    }
    
    .btnR:active {
        border: none;
        outline: none;
    }
    
    .btnR:hover {
        border: none;
        outline: none;
    }

    @font-face {
        font-family: 'Lato', sans-serif;
        src: url(https://fonts.googleapis.com/css?family=Lato:100i,300,400,700i&display=swap);
    }

    @media only screen and (max-width: 1000px) {
        margin-top: 9px;
        margin-right: 0px;

        .btnL {
            margin-right: 0x;
            margin-left: 0px;
            font-size: 0.9em;
            padding-bottom: 3px;
        }
    
        .btnR {
            margin-left: 10px;
            font-size: 0.9em;
            padding-bottom: 3px;
        }
    }
`