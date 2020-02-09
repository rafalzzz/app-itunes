import React, {memo, useEffect, useState, useCallback} from 'react';

import {useSelector, useDispatch} from 'react-redux';
import {songsCount, songsArray, loadingSongs, isError} from '../../store/songs/selectors';

import {fetchSongsStarted} from '../../store/songs/actions';

import {ListLayout} from './layout'


export const List = memo(() => {

    const [songsArr, setSongsArr] = useState([]);
    const [currentSongs, setCurrentSongs] = useState([])
    const [currentPage, setCurrentPage] = useState(0)

    const itemsNumber = useSelector(songsCount);
    const songs = useSelector(songsArray);
    const loading = useSelector(loadingSongs);
    const error = useSelector(isError);

    const dispatch = useDispatch();
    const handleFetchSongs = useCallback((term) => {
    dispatch(fetchSongsStarted({ term: term }));
    }, []);

    useEffect(() => {
        handleFetchSongs('pop');
        for (let i=0; i<itemsNumber; i++) {
            songsArr.push(songs[i])
        }
    }, []);

    useEffect(() => {
        setSongsArr([]);
        for (let i=0; i<itemsNumber; i++) {
            songsArr.push(songs[i])
        }
        setCurrentSongs(songsArr.slice(currentPage*9, currentPage*9+9))
    }, [songs, currentPage]);

    const handleNextButton = e => {
        if (currentPage*9 > itemsNumber - 9) {
            setCurrentPage(0)
        } else {
            setCurrentPage(currentPage + 1)
            setCurrentSongs(songsArr.slice(currentPage*9, currentPage*9+9))
        }
    }

    const handlePrevButton = e => {
        if ( currentPage <= 0) {
            setCurrentPage(0)
        } else {
            setCurrentPage(currentPage - 1)
            setCurrentSongs(songsArr.slice(currentPage*9, currentPage*9+9))
        }
    }

    return (
    <div>
        <ListLayout
            itemsNumber={itemsNumber}
            songs={currentSongs}
            handleNextButton={handleNextButton}
            handlePrevButton={handlePrevButton}
            loading={loading}
            error={error}
        />
    </div>
  );
});