
var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  
  var token = req.csrfToken();
  res.render('newsletter', {tok: token});
});
router.post('/', function(req, res, next){
    req.assert('email', 'email is required').notEmpty();
    req.assert('email','A valid email is required').notEmpty().isEmail();
    var errors = req.validationErrors();
    if(errors){
       res.render('errors', {errors: errors}) 
    }
        var sess = req.session;
        sess.email = req.body.email;
        res.render('thankyou', {email: req.body.email})
 
});
module.exports = router;