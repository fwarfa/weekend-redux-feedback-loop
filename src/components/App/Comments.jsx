import { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';

function Comments () {
    const dispatch = useDispatch();
    const history = useHistory();
    const [comment, setComment] = useState({commentField: ''});

    const handleInputChange = (event) => {
        setComment({commentField: event.target.value})
    } // end handleInputChange

    const onSubmit = (event) => {
        event.preventDefault(event);

        dispatch({
            type: 'SET_FEELING',
            payload: comment
        });

        setComment({commentField: ''});
        history.push('/5');

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
                    value={comment.commentField}
                    onChange={handleInputChange}
                />
                <button type="submit">NEXT</button>
            </form>
        </>
    );
}

export default Comments;