import React from 'react';

import {ItemsCountContainer} from './itemsCount.styled'

export const ItemsCount = ({itemsNumber, loading, error}) => (
    <ItemsCountContainer>
        {itemsNumber > 0 &&
            <p>Found {itemsNumber} songs</p>}
        {loading && <p>Loading ...</p>}
        {itemsNumber < 1 && !loading && <p>Sorry, no matches found</p>}
        {error && <p>Something wrong with server</p>}
    </ItemsCountContainer>
)