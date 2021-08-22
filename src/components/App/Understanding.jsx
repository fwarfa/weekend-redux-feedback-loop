import { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';

function Understanding () {
    const dispatch = useDispatch();
    const history = useHistory();
    const [understandingRating, setUnderstandingRating] = useState('');

    const handleInputChange = (event) => {
        setUnderstandingRating(event.target.value)
    } // end handleInputChange

    const onSubmit = (event) => {
        event.preventDefault(event);
        
        dispatch({
            type: 'SET_UNDERSTANDING',
            payload: understandingRating
        });

        setUnderstandingRating('');
        history.push('/3');

    } // end handleClick

    return (
        <>
            <h1>How well are you understanding the content?</h1>
            <form onSubmit={onSubmit}>
                <label for="understanding">Understanding?</label>
                <input 
                    name="undertanding"
                    type="number" 
                    placeholder="0"
                    value={understandingRating}
                    onChange={handleInputChange}
                    required
                />
                <button type="submit">NEXT</button>
            </form>
        </>
    );
}

export default Understanding;