import { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';

function Feeling () {
    const dispatch = useDispatch();
    const history = useHistory();
    const [feelingRating, setFeelingRating] = useState('');

    const handleInputChange = (event) => {
        setFeelingRating(event.target.value)
    } // end handleInputChange

    const onSubmit = (event) => {
        event.preventDefault(event);

        dispatch({
            type: 'SET_FEELING',
            payload: feelingRating
        });

        setFeelingRating('');
        history.push('/2');

    } // end handleClick

    return (
        <>
            <h1>How are you feeling today?</h1>
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
        </>
    );
}

export default Feeling;