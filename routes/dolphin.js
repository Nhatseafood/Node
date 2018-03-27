var express = require('express');
var router = express.Router();

router.get('/dolphin', function(request,response) {
    response.render('pets', {
        pageTitle: 'Dolphin Title',
        pageID: 'Dolçphin',
        name: 'Squirt',
        description:"An image of dolphin",
        imgUrl: "images/dolphin.jpg"
    });


});

module.exports = router;