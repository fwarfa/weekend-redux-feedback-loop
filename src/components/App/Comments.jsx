import { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';

function Comments () {
    return (
        <>
            <h1>Any comments you want to leave?</h1>
            <label for="comments">Comments</label>
            <input 
                name="comments"
                type="text" 
                placeholder="Leave a comment!"
            />
            <button>NEXT</button>
        </>
    );
}

export default Comments;