var React = require('react');
//var Login = require('./login');
//var SignUp = require('./signup');

var App = React.createClass({
  
  clickHandler: function(){
    console.log(this.props.msg);
  },
  
  render:function(){
  	return (
  		<div>
	    	Hello
	    </div>
  	)
    
  }

});

React.render(<App />, document.getElementById("app"));
module.exports = App;
