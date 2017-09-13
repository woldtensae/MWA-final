
var express = require('express');
var router = express.Router();
var mongoClient = require('mongodb').MongoClient;


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Registration Form' });
});

router.post('/', function(req, res, next){
  mongoClient.connect('mongodb://127.0.0.1:27017/location', (err, db) => {
    if(err) throw err;
    var doc = {'name': req.body.name, 'category': req.body.category, 'location': {'long': parseFloat(req.body.long), 'lat': parseFloat(req.body.lat)} }
    db.collection('locationDoc').insert(doc, function(err, docInserted){
          if(err) throw err;
            //console.dir(`sccucess: ${JSON.stringify(docInserted)}` );
            res.render('success', {status: 'data inserted successfully'});
          db.close
    });
  });

});

module.exports = router;
