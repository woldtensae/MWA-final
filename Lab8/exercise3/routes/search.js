var express = require('express');
var router = express.Router();
var mongoClient = require('mongodb').MongoClient;


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('search', { title: 'Search the nerest location' });
});

router.post('/', function(req, res, next){
    var long = parseFloat(req.body.long);
    var lat = parseFloat(req.body.lat);
    console.log(long);
    console.log(lat);
    console.log(req.body.option);
    mongoClient.connect('mongodb://127.0.0.1:27017/location', (err, db) => {
        if(err) throw err;
        var query = {'category': req.body.option};
   
        //db.collection('locationDoc').find(query).toArray().find({location: {$near: [long, lat]}}).limit(10);

        db.collection.find({location: {$near: [long, lat]}}).limit(1);        
        
        //res.end();
      });
});

module.exports = router;