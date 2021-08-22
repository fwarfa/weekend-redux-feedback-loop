import { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';

function Understanding () {
    const dispatch = useDispatch();
    const history = useHistory();
    const [understanding, setUnderstanding] = useState({understandingRating: ''});

    const handleInputChange = (event) => {
        setUnderstanding({understandingRating: event.target.value})
    } // end handleInputChange

    const onSubmit = (event) => {
        event.preventDefault(event);
        
        dispatch({
            type: 'SET_UNDERSTANDING',
            payload: understanding
        });

        setUnderstanding({understandingRating: ''});
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
                    value={understanding.understandingRating}
                    onChange={handleInputChange}
                    required
                />
                <button type="submit">NEXT</button>
            </form>
        </>
    );
}

export default Understanding;