var React = require('react');
var Component = React.createFactory(require('./components/home'));

window.renderApp = function(msg){
	React.render(Component({msg:msg}), document.body);
}