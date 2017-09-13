
var express = require('express');
var router = express.Router();
var mongoClient = require('mongodb').MongoClient;


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('update', { title: 'Update By Name' });
});

router.post('/', function(req, res, next){
  mongoClient.connect('mongodb://127.0.0.1:27017/location', (err, db) => {
    if(err) throw err;
    var query = {'name': req.body.nameTobBeUpdated}
    db.collection('locationDoc').findOne(query, function(err, doc){
          if(err) throw err;
          console.log(doc);
            query['_id'] = doc['_id'];
            doc['name'] = req.body.name;
            doc['category'] = req.body.category;
            doc['long'] = req.body.long;
            doc['lat'] = req.body.lat; 
            db.collection('locationDoc').update(query, doc, function(err, numOfUpdated){
                res.render('success', {status: 'data updated successfully'});
            })
          db.close;
    });
  });
});

module.exports = router;
