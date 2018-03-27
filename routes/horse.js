var express = require('express');
var router = express.Router();


router.get('/horse', function(request,response) {
    response.render('pets', {
        pageTitle: 'Horse Title',
        pageID: 'Horse',
        name: 'Black Beauty',
        description:"An image of a horse",
        imgUrl: "images/Horse.jpg"
    });


});

module.exports = router;