const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// GET
router.get('/', (req, res) => {
    console.log('GET /feedback');
    pool.query('SELECT * from "feedback";').then((result) => {
        console.log('feedback response is', result.rows);
        
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /feedback', error)
        res.sendStatus(500);
    });
})

// POST
router.post('/',  (req, res) => {
    let newFeedback = req.body;
    console.log(`Adding feedback`, newFeedback);
    console.log('stuff ', newFeedback.feelingRating, newFeedback.understandingRating, newFeedback.supportRating, newFeedback.commentField);
    
  
    let queryText = `
        INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
        VALUES ($1, $2, $3, $4);
    `;
    pool.query(queryText, [newFeedback.feelingRating, newFeedback.understandingRating, newFeedback.supportRating, newFeedback.commentField])
      .then(result => {
        res.sendStatus(201);
      })
      .catch(error => {
        console.log(`Error adding new feedback`, error);
        res.sendStatus(500);
      });
  });

module.exports = router;