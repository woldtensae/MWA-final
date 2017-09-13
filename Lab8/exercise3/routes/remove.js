
var express = require('express');
var router = express.Router();
var mongoClient = require('mongodb').MongoClient;


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('remove', { title: 'Remove a record' });
});

router.post('/', function(req, res, next){
  mongoClient.connect('mongodb://127.0.0.1:27017/location', (err, db) => {
    if(err) throw err;
    var query = {'name': req.body.nameTobBeRemoved}
    console.log(query);
    db.collection('locationDoc').remove(query, function(err, removedDoc){
          if(err) throw err;
                res.render('success', {status: 'data removed successfully'});
          db.close;
    });
  });
});

module.exports = router;
