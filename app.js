var express = require('express');
var React = require('react');
var fs = require('fs');
var path = require('path');
var bodyParser = require('body-parser');
var logger = require('winston');

var app = express();

app.set('port', process.env.PORT || 3000);
//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
console.log(__dirname);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});