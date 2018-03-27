var express = require('express');
var router = express.Router();

router.get('/cats', function(request,response) {
    response.render('pets', {
        pageTitle: 'Cat Title',
        pageID: 'Cat',
        name: 'Orion',
        description: "An image of my cat when he was a kitten",
        imgUrl: "images/cat.jpg"
    });


});

module.exports = router;