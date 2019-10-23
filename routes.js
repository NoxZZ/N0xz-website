var express = require('express');
var route = express.Router();


//GET request for homepage...
route.get('/',(req,res) => {
    res.redirect('/home');
});

//GET request for home...
route.get('/home', (req,res) =>{
    res.render('index');
});

route.get('/info',(req,res) => {
    res.render('info');
});

module.exports = route;