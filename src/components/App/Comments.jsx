import { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';

function Comments () {
    const dispatch = useDispatch();
    const history = useHistory();
    const [commentField, setCommentField] = useState('');

    const handleInputChange = (event) => {
        setCommentField(event.target.value)
    } // end handleInputChange

    const onSubmit = (event) => {
        event.preventDefault(event);

        dispatch({
            type: 'SET_FEELING',
            payload: commentField
        });

        setCommentField('');
        history.push('/1');

    } // end handleClick

    return (
        <>
            <h1>Any comments you want to leave?</h1>
            <form onSubmit={onSubmit}>
                <label for="comments">Comments</label>
                <input 
                    name="comments"
                    type="text" 
                    placeholder="Leave a comment!"
                    value={commentField}
                    onChange={handleInputChange}
                />
                <button type="submit">NEXT</button>
            </form>
        </>
    );
}
/*
            <form onSubmit={onSubmit}>
                <label for="feeling">Feeling?</label>
                <input 
                    name="feeling"
                    type="number" 
                    placeholder="0"
                    value={feelingRating}
                    onChange={handleInputChange}
                    required
                />
                <button type="submit">NEXT</button>
            </form>
*/
export default Comments;