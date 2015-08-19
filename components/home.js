var React = require('react');
//var Login = require('./login');
//var SignUp = require('./signup');

var App = React.createClass({
  
  clickHandler: function(){
    console.log(this.props.msg);
  },
  
  render:function(){
    return React.createElement('button', {onClick: this.clickHandler}, this.props.msg);          
  }

});

module.exports = App;
