var express = require('express');
var router = express.Router();

router.get('/wolf', function(request,response) {
    response.render('pets', {
        pageTitle: 'Wolf Title',
        pageID: 'Wolf',
        name: 'Beowulf',
        description: "An image of a wolf",
        imgUrl: "images/wolf.png"
    });


});

module.exports = router;