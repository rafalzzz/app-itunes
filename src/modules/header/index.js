import React, {useState, useCallback} from 'react';

import {useDispatch} from 'react-redux';
import {fetchSongsStarted} from '../../store/songs/actions';

import {HeaderLayout} from './layout'

export const Header = () => {

    const [term, setTerm] = useState('');

    const dispatch = useDispatch();
    const handleFetchSongs = useCallback((term) => {
    dispatch(fetchSongsStarted({ term: term }));
    }, []);

    const handleOnChange = (e) => {
        setTerm(e.target.value)
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        handleFetchSongs(term);
    };

    return (
    <div>
        <HeaderLayout
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
        />
    </div>
  );
};