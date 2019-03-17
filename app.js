var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//const mysql = require('mysql');


/*var mysql = require('mysql');
var con = mysql.createConnection({
	host: "127.0.0.1",
	user: "ks",
	password: "1",
	database: "k1"
 });

 con.connect(function(err) {
	if (err){ console.log(err); throw err; }
	console.log("Connected!");
});*/



var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var vehicleRouter = require('./routes/api/vehicle');
//var driverRouter = require('./routes/api/driver');
//var apiModal = require('./models/apiModal1');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/v', vehicleRouter);
//app.use('/api/d', driverRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

module.exports = app;
