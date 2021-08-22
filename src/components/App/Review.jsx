import { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Review () {
    const feedbackInfo = useSelector(store => store.feedbackReducer);
    const history = useHistory();

    if (window.history && history.pushState) {
        addEventListener('load', function() {
            history.pushState(null, null, null); // creates new history entry with same URL
            // addEventListener('popstate', function() {
            //     var stayOnPage = confirm("Would you like to save this draft?");
            //     if (!stayOnPage) {
            //         history.back() 
            //     } else {
            //         history.pushState(null, null, null);
            //     }
            // });    
        });
    }

    const onSubmit = (event) => {
        event.preventDefault(event);
        
        // POST Function goes here
        let newFeedback = {
            feelingRating: feedbackInfo[0].feelingRating,
            understandingRating: feedbackInfo[1].understandingRating,
            supportRating: feedbackInfo[2].supportRating,
            commentField: feedbackInfo[3].commentField
        };

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
            <p>Feeling: {feedbackInfo[0].feelingRating}</p>
            <p>Understanding: {feedbackInfo[1].understandingRating}</p>
            <p>Support: {feedbackInfo[2].supportRating}</p>
            <p>Comment: {feedbackInfo[3].commentField}</p>

            <form onSubmit={onSubmit}>
                <button type="submit">SUBMIT</button>
            </form>
        </>
    );
}
/*
        {feedbackInfo.map(feedback => {
            return(
                <div>
                    // <h3>{feedback.understandingRating}</h3>
                    // <h3>Understaning: {feedback.understandingRating}</h3>
                    // <h3>Support: {feedback.supportRating}</h3>
                    // <h3>Comments: {feedback.commentField}</h3> 
                </div>
            );
        })}

      <ul>
        {products.map((product, i) => {
          return <ProductListItem key={i} product={product} />;
        })}
      </ul>
*/
export default Review;