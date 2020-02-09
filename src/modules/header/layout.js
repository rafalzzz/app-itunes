import React from 'react';

import {Input} from './components/input'

export const HeaderLayout = ({handleOnChange, handleOnSubmit}) => (
    <div>
        <Input
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
        />
    </div>
)