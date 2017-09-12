
var express = require('express');
var router = express.Router();
var mongoClient = require('mongodb').MongoClient;
var crypto = require('crypto');


/* GET users listing. */
router.get('/', function(req, res, next) {
    mongoClient.connect('mongodb://127.0.0.1:27017/test', (err, db) => {
            
            if(err) throw err;
            const decipher = crypto.createDecipher('aes256','asaadsaad');
            db.collection('homework7').findOne({}, function(err, doc){
                if(err) throw err;
                const data = doc.message1;
                //console.log(data);
                var dec = decipher.update(String(data),'hex','utf8');
                dec += decipher.final('utf8');
                db.close();
                res.render('secret', {message: dec});
                  
            })
        });
 
});

module.exports = router;