import React from 'react';

import {ItemsCount} from './components/itemsCount'
import {ListItems} from './components/listItems'
import {Buttons} from './components/buttons'

export const ListLayout = ({itemsNumber, songs, handleNextButton, handlePrevButton, loading, error}) => (
    <div>
        <ItemsCount
            itemsNumber={itemsNumber}
            loading={loading}
            error={error}
        />
        <ListItems 
            songs={songs}          
        />
        <Buttons 
        handleNextButton={handleNextButton}
        handlePrevButton={handlePrevButton}
        itemsNumber={itemsNumber}
        />
    </div>
)