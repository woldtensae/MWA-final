var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var csrf = require('csurf');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var consolidate = require('consolidate');
var session = require('express-session');
var validator = require('express-validator');

var index = require('./routes/index');
var users = require('./routes/users');
var newsletter = require('./routes/newsletter');




var app = express();

// view engine setup
app.engine('ejs', consolidate.ejs);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(validator());

app.use(cookieParser());
app.use(session({secret: 'mySecrete'}));
app.use(csrf());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', index);
app.use('/users', users);
app.use('/newsletter', newsletter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.listen(3000, () => console.log('connnected at 3000...'))
module.exports = app;
