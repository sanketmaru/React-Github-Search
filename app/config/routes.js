var React = require('react');
var Home = require('../components/home');
var Main = require('../components/main');
var Profile = require('../components/profile');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route =  Router.Route;


module.exports = (
	<Route name="app" path="/" handler = {Main} >
    <Route name="profile" path="profile/:username" handler={Profile} />
		<DefaultRoute handler={Home} />
	</Route>
)