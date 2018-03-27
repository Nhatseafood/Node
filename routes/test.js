var express = require('express');
var router = express.Router();

router.get('/test', function(request,response) {
    response.render('test', {
        pageTitle: 'Test',
        pageID: 'Cat',
        name: 'Orion',
        description: "An image of my cat when he was a kitten",
        imgUrl: "images/cat.jpg"
    });


});

module.exports = router;