const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

// view engine setup
// set : 설정하는 것
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// use : 미들웨어 사용하는 것 use 안에 들어있는 것들은 다 미들웨어
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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

//app이라는 객체는 express를 담고 있는데 미들웨어를 모두 적용한 상태로 export됨
//이후 www에서 사용됨 이를 이용해서 서버를 띄움
module.exports = app;
