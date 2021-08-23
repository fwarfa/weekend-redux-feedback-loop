import { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

function Supported () {

    const dispatch = useDispatch();
    const history = useHistory();
    const [support, setSupport] = useState('');

    const handleInputChange = (event) => {
        setSupport(event.target.value)
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
            type: 'SET_SUPPORT',
            payload: support
        });

        setSupport('');
        history.push('/4');

    } // end handleClick
    return (
        <>
            <h1>How well are you being supported?</h1>
            <button value="Go back!" onClick={goBack}> BACK </button>
            <form onSubmit={onSubmit}>
                <label for="supported">Support?</label>
                <input 
                    name="supported"
                    type="number" 
                    placeholder="0"
                    value={support}
                    onChange={handleInputChange}
                    required
                />
                <Button variant="contained" type="submit">NEXT</Button>
            </form>
        </>
    );
}

export default Supported;