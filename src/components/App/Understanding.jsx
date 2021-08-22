import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';

function Understanding () {
    return (
        <>
            <h1>How well are you understanding the content?</h1>
            <label for="understanding">Understanding?</label>
            <input 
                required
                name="undertanding"
                type="number" 
                placeholder="0"
            />
            <button>NEXT</button>
        </>
    );
}

export default Understanding;