
var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
var swig = require('swig');

/* GET users listing. */
router.get('/', function(req, res, next) {
  fetch('http://jsonplaceholder.typicode.com/users').then(function(response) {
    // response.json() returns a promise, use the same .then syntax to work with the results
    response.json().then(function(usersList){
      // users is now our actual variable parsed from the json, so we can use it
      var list = usersList;    
      res.render('users', list);
          
    });
  }).catch(err => console.log('err'));  
});

module.exports = router;
