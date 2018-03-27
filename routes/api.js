var express = require('express');
var router = express.Router();
var bodyParser =require('body-parser');
var fs = require('fs');
var feedBackData = require('../data/feedback.json');

router.get('/api', function(req,res) {
    res.json(feedBackData);
});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.post('/api', function(req, res) {
  feedBackData.unshift(req.body);
    fs.writeFile('app/data/feedback.json', JSON.stringify(feedbackData), 'utf8', function(err) {
      if (err) {
        console.log(err);
      }
    });
    res.json(req.body);
  });

  // router.delete('/api/:id', function(req, res) {
  //   feedbackData.splice(req.params.id, 1);
  //   fs.writeFile('app/data/feedback.json', JSON.stringify(feedbackData), 'utf8', function(err) {
  //     if (err) {
  //       console.log(err);
  //     }
  //   });
  //   res.json(feedbackData);
  // });
  
  
  
  module.exports = router;
  

