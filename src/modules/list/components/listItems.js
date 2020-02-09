import React from 'react';

import {ListItemsContainer} from './listItems.styled'

export const ListItems = ({songs}) => {


      return (
        <ListItemsContainer>
            {songs && songs.map((song, i) => (
            <div key={i} className="ItemContainer">
                <div className="icon"><img src={song.artworkUrl100  || undefined} alt="img" /></div>
                <div className="itemInfo">
                    <div className="itemTitle">{song.trackName}</div>
                    <div className="itemAuthor">by {song.artistName}</div>
                </div>
            </div>
            ))}
        </ListItemsContainer>
    )
}