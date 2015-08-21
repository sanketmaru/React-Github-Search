var React = require('react');
var Home = require('../components/home');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route =  Router.Route;


module.exports = (
	<Route name="app" path="/" handler = {Home} >
	</Route>
)