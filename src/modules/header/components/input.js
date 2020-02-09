import React from 'react';

import {InputContainer} from './input.styled'

export const Input = ({handleOnChange, handleOnSubmit}) => (
    <InputContainer>
        <p className="title">
            iTunes api example
        </p>
        <form onSubmit={handleOnSubmit}>
            <input type="text" placeholder="Search songs..." onChange={handleOnChange}/>
            <button type="submit">search</button>
        </form>
        <p className="footer">
            Search by song title, author, song number, lyrics, catalog or copyright owner
        </p>
    </InputContainer>
)