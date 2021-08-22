import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';

function Supported () {
    return (
        <>
            <h1>How well are you being supported?</h1>
            <label for="supported">Support?</label>
            <input 
                required
                name="supported"
                type="number" 
                placeholder="0"
            />
            <button>NEXT</button>
        </>
    );
}

export default Supported;