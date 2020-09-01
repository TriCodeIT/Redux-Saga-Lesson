var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const firebase = require("firebase");

const { graphqlHTTP } = require("express-graphql");

const cors = require('cors');

const config = {
    apiKey: "AIzaSyBSwNmP7pQ3lgOS3nelphFYlp51hwFwBeQ",
    authDomain: "rubicamp-go-34317.firebaseapp.com",
    databaseURL: "https://rubicamp-go-34317.firebaseio.com",
    projectId: "rubicamp-go-34317",
    storageBucket: "rubicamp-go-34317.appspot.com",
    messagingSenderId: "854321732050"
  };
firebase.initializeApp(config);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/', indexRouter);
app.use('/users', usersRouter);


const userSchema = require('./graphql').userSchema;
app.use('/graphql', cors(), graphqlHTTP({
  schema: userSchema,
  rootValue: global,
  graphiql: true
}));

module.exports = app;
