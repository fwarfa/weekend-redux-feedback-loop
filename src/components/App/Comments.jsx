import { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

function Comments () {
    const dispatch = useDispatch();
    const history = useHistory();
    const [comment, setComment] = useState('');

    const handleInputChange = (event) => {
        setComment(event.target.value)
    } // end handleInputChange

    const goBack = () => {
        history.goBack();
    }

    const onSubmit = (event) => {
        event.preventDefault(event);

        dispatch({
            type: 'SET_COMMENT',
            payload: comment
        });

        setComment('');
        history.push('/5');

    } // end handleClick

    return (
        <>
            <h1>Any comments you want to leave?</h1>
            <button value="Go back!" onClick={goBack}> BACK </button>
            <form onSubmit={onSubmit}>
                <label for="comments">Comments</label>
                <input 
                    name="comments"
                    type="text" 
                    placeholder="Leave a comment!"
                    value={comment}
                    onChange={handleInputChange}
                />
                <Button variant="contained" type="submit">NEXT</Button>
            </form>
        </>
    );
}

export default Comments;