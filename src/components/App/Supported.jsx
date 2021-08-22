import { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';

function Supported () {

    const dispatch = useDispatch();
    const history = useHistory();
    const [support, setSupport] = useState({supportRating: ''});

    const handleInputChange = (event) => {
        setSupport({supportRating: event.target.value})
    } // end handleInputChange

    const goBack = () => {
        history.goBack();
    }

    const onSubmit = (event) => {
        event.preventDefault(event);

        dispatch({
            type: 'SET_SUPPORT',
            payload: support
        });

        setSupport({supportRating: ''});
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
                    value={support.supportRating}
                    onChange={handleInputChange}
                    required
                />
                <button type="submit">NEXT</button>
            </form>
        </>
    );
}

export default Supported;