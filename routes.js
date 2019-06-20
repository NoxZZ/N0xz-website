var express = require('express');
var route = express.Router();

//GET request for homepage...
route.get('/',(req,res) => {
    res.redirect('/dashboard');
});

//GET request for dashboard...
route.get('/dashboard', (req,res) =>{
    res.render('index');
});

module.exports = route;