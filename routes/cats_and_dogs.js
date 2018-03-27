var express = require('express');
var router = express.Router();

router.get('/cats_and_dogs', function(request,response) {
    response.render('layout', {
        pageTitle: 'Cats & Dogd Title',
        pageID: 'Cats & Dogs'
    });


});
module.exports = router;