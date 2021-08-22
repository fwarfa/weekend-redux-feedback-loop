import { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';

function Success() {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleClick = () => {
        dispatch({
            type: 'CLEAR_FEEDBACK'
        });
        history.push('/1');
    }
    return (
        <>
            <h1>Great Feedback!</h1>
            <h2>Thank You!</h2>
            <button
                onClick={handleClick}
            >Leave New Feedback</button>
        </>
    );
}

export default Success;