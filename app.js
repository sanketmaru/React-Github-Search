var express = require('express');
var React = require('react');
var fs = require('fs');
var Component = React.createFactory(require('./components/home'));

var BUNDLE = fs.readFileSync('./bundle.js', {encoding: 'utf8'});
var TEMPLATE = fs.readFileSync('./index.html', {encoding: 'utf8'});

var app = express();

function home(req,res){
	var msg = req.params.msg || 'sa';
	res.send(React.renderToString(Component({msg:msg})));	
}

app.get('', home);
app.get('/bundle.js', function(req,res){
	res.send(BUNDLE)
});

app.get('/:msg', home);

app.listen(4000);