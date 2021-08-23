import { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Button } from '@material-ui/core';


function Review () {
    const feedbackInfo = useSelector(store => store.feedbackReducer);
    const dispatch = useDispatch();
    const history = useHistory();

    const goBack = () => {
        dispatch({
            type: 'CLEAR_PREVIOUS'
        });
        history.goBack();
    }

    const onSubmit = (event) => {
        event.preventDefault(event);
        
        // POST Function goes here
        let newFeedback = {
            feelingRating: feedbackInfo[0],
            understandingRating: feedbackInfo[1],
            supportRating: feedbackInfo[2],
            commentField: feedbackInfo[3]
        };

        console.log('post info', newFeedback);

            axios({
            method: 'POST',
            url: '/feedback',
            data: newFeedback
        }).then(response => {
            console.log('POST /feedback', response);
        }).catch(err => {
            console.log('POST /feedback failed', err);
        });

        history.push('/6');
    }
    return (
        <>
            <h1>Review Your Feedback</h1>
            <button value="Go back!" onClick={goBack}> BACK </button>
            <p>Feeling: {feedbackInfo[0]}</p>
            <p>Understanding: {feedbackInfo[1]}</p>
            <p>Support: {feedbackInfo[2]}</p>
            <p>Comment: {feedbackInfo[3]}</p>

            <form onSubmit={onSubmit}>
                <Button color="success" variant="contained" type="submit">SUBMIT</Button>
            </form>
        </>
    );
}

export default Review;