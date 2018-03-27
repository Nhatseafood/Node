//imports express
var express = require('express');
//express is a object that needs to be created as a varible in order to use it. 
var app = express();
var dataFile = require('./data/animals.json')


//var reload = require('reload');

//
app.set('appData', dataFile);
app.set('view engine', 'ejs');
app.set('views','app/views');


//lets you use css in public folder publically 
app.use(express.static('app/public'));
//creates routes 
//  app.use(require('./routes/cats'));
//  app.use(require('./routes/dogs'));
//  app.use(require('./routes/cats_and_dogs'));
//  app.use(require('./routes/horse'));
//  app.use(require('./routes/wolf'));
//  app.use(require('./routes/dolphin'));
//  app.use(require('./routes/test'));
 app.use(require('./routes/feedback'));
 //app.use(require('./routes/frontpage'));
 app.use(require('./routes/api'));


// app.get('/form', function(req,res){
//     response.render('form.html');
// });

// app.get('/', function(request,response) {
//    response.send('hello world')
// });



// app.get('/dogs', function(request, response) {
//     response.send('Woof')
// });

app.get('/cats_and_dogs', function(request, response) {
    response.send('Living together')
});

// app.get('/greet/:name', function (request,response) {
//     var name = request.params.name;
//     response.send('Hello, ' + name + '!');
// });




//telling server to listen to that port
var server = app.listen(9005, function () {
    console.log('listening for port 9005');

});

//reload(server,app);