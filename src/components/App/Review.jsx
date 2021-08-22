import { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';

function Review () {
    const feedbackInfo = useSelector(store => store.feedbackReducer);

    const onSubmit = (event) => {
        event.preventDefault(event);
        
        // POST Function goes here

                axios({
            method: 'POST',
            url: '/api/pizza',
            data: newPizza
        }).then(response => {
            console.log('POST /api/pizza', response);

            dispatch ({
                type: 'CLEAR_CART'
            });

        }).catch(err => {
            console.log('POST /api/pizza failed', err);
        });
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