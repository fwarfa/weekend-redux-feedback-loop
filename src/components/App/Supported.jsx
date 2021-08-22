import { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';

function Supported () {

    const dispatch = useDispatch();
    const history = useHistory();
    const [supportRating, setSupportRating] = useState('');

    const handleInputChange = (event) => {
        setSupportRating(event.target.value)
    } // end handleInputChange

    const onSubmit = (event) => {
        event.preventDefault(event);

        dispatch({
            type: 'SET_FEELING',
            payload: supportRating
        });

        setSupportRating('');
        history.push('/4');

    } // end handleClick
    return (
        <>
            <h1>How well are you being supported?</h1>
            <form onSubmit={onSubmit}>
                <label for="supported">Support?</label>
                <input 
                    name="supported"
                    type="number" 
                    placeholder="0"
                    value={supportRating}
                    onChange={handleInputChange}
                    required
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
export default Supported;