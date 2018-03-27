var express = require('express');
var router = express.Router();


router.get('/dogs', function(request,response) {
    response.render('pets', {
        pageTitle: 'Dog Title',
        pageID: 'Dog',
        name: 'Fluffy',
        description: 'An image of my dog when he was a puppy',
        imgUrl: "images/dog.jpeg"
    });


});

module.exports = router;