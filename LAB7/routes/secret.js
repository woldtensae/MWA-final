
var express = require('express');
var router = express.Router();
var mongoClient = require('mongodb').MongoClient;
var crypto = require('crypto');


/* GET users listing. */
router.get('/', function(req, res, next) {
    mongoClient.connect('mongodb://127.0.0.1:27017/test', (err, db) => {
            if(err) throw err;
            var decipher = crypto.createDecipher('aes256','asaadsaad');
            db.collection('homework7').findOne({}, function(err, doc){
                if(err) throw err;
                const data = doc.message;
                var dec = decipher.update(data,'hex','utf8');
                dec += decipher.final('utf8');
                res.render('output', {message: dec});
            });
        });
    });

module.exports = router;