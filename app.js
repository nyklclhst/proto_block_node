var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var upload = require('express-fileupload');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/regis');
var dataRouter = require('./routes/data');
var askRouter = require('./routes/ask');
var icRouter = require('./routes/inputcard');
var pinRouter = require('./routes/pinjam');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(upload({
  useTempFiles: false,
  tempFileDir: '/tmp/'
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/regis', usersRouter);
app.use('/ask', askRouter);
app.use('/data', dataRouter);
app.use('/inputcard', icRouter);
app.use('/pinjam', pinRouter);

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
