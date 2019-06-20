var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var route = require('./routes');

//setting the path or working directory...
app.use(express.static(path.join(__dirname,'public')));

//setting up view engine...
app.set('views',path.join(__dirname,'/public/views'));
app.set('view engine','ejs');

//setting home route...
app.use('',route);


//running the server...
var port = 6060;
app.listen(port,() => {
    console.log('the server is up and running on port ',port);
});