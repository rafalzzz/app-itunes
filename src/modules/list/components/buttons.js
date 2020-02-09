import React from 'react';

import {ButtonsContainer} from './buttons.styled'

export const Buttons = ({handleNextButton, handlePrevButton, itemsNumber}) => (
    <ButtonsContainer>
        { itemsNumber > 9 && <div>
        <button className="btnL" onClick={handlePrevButton}> &lt;&lt; prev </button>
        <button className="btnR" onClick={handleNextButton}> next &gt;&gt; </button>
        </div>
        }
    </ButtonsContainer>
)