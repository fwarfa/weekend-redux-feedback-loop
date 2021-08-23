import { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

function Feeling () {
    const dispatch = useDispatch();
    const history = useHistory();
    const [feeling, setFeeling] = useState('');

    const handleInputChange = (event) => {
        setFeeling(event.target.value)
    } // end handleInputChange

    const onSubmit = (event) => {
        event.preventDefault(event);

        dispatch({
            type: 'SET_FEELING',
            payload: feeling
        });

        setFeeling('');
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
                    value={feeling}
                    onChange={handleInputChange}
                    required
                />
                <Button variant="contained" type="submit">NEXT</Button>
            </form>
        </>
    );
}

export default Feeling;