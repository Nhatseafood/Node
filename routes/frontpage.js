var express= require('express');
var router = express.Router();


router.get('/', function(req,res){
    //calling global json file
    var dataFile = req.app.get('appData');
    var photos =[];

    dataFile.forEach(function(item){
        photos = photos.concat(item.imgURL);
    }); //end of foreach
    

    res.render('frontpage', {
        pageTitle: 'Frontpage',
        pageID: 'Home',
        images: photos
    }); //end of render 

   
    console.log(photos);
});



module.exports = router;