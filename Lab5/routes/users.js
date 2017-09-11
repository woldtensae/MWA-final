
var express = require('express');
var router = express.Router();
var fetch = require('node-fetch');
var ejs = require('ejs');
var http = require('http');
var Rx = require('@reactivex/rxjs');
var await = require('async-await');



/* GET users listing. */
router.get('/', function(req, res, next) {
  //1. Promisis
  /*getFile().then(function(response) {
    response.json().then(function(usersList){
      console.log(usersList);
      res.render('users.ejs', {'users': usersList}); 
    });
    }).catch(err => console.log('err'));  
    */      
  //2. using Obervables
    /*Rx.Observable.fromPromise(getFile())
                 .subscribe((data) => data.json().then
                  ((data)=>{
                    res.render('users.ejs', {'users': data});
                  }));
      */            
  //3. using Async/Await
       askForFile();
       async function askForFile(){
        try{
          let promisForData = await getFile();
          data = promisForData.json();
          console.log(data);
          res.render('users.ejs', {'users': data});
        }catch(error){
          console.log(error);
        } 
    }
                 
});
    

    //A promis object
    var getFile = function(){
      return fetch('http://jsonplaceholder.typicode.com/users',   (resolve, reject) =>  {
          if(data){ resolve(data)}
          else{ reject("error")}
      });
    }

module.exports = router;
