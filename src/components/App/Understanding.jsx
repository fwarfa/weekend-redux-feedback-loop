import { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

function Understanding () {
    const dispatch = useDispatch();
    const history = useHistory();
    const [understanding, setUnderstanding] = useState('');

    const handleInputChange = (event) => {
        setUnderstanding(event.target.value)
    } // end handleInputChange

    const goBack = () => {
        dispatch({
            type: 'CLEAR_PREVIOUS'
        });
        history.goBack();
    }

    const onSubmit = (event) => {
        event.preventDefault(event);
        
        dispatch({
            type: 'SET_UNDERSTANDING',
            payload: understanding
        });

        setUnderstanding('');
        history.push('/3');

    } // end handleClick

    return (
        <>
            <h1>How well are you understanding the content?</h1>
            <button value="Go back!" onClick={goBack}> BACK </button>
            <form onSubmit={onSubmit}>
                <label for="understanding">Understanding?</label>
                <input 
                    name="undertanding"
                    type="number" 
                    placeholder="0"
                    value={understanding}
                    onChange={handleInputChange}
                    required
                />
                <Button variant="contained" type="submit">NEXT</Button>
            </form>
        </>
    );
}

export default Understanding;