var React = require('react');
//var Login = require('./login');
//var SignUp = require('./signup');

var App = React.createClass({
  
  clickHandler: function(){
    console.log(this.props.msg);
  },
  
  render:function(){
  	return (
  		<h2 className="text-center">
	    	Search by github username
	    </h2>
  	)
    
  }

});

module.exports = App;
