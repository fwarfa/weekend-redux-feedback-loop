import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';

function Feeling () {
    return (
        <>
            <h1>How are you feeling today?</h1>
            <label for="feeling">Feeling?</label>
            <input 
                required
                name="feeling"
                type="number" 
                placeholder="0"
            />
            <button>NEXT</button>
        </>
    );
}

export default Feeling;