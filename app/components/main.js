var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
var SearchGithub = require('./searchgithub');
var App = React.createClass({
  
  clickHandler: function(){
    console.log(this.props.msg);
  },
  
  render:function(){
  	return (
      <div className="main-container">
        <nav className="navbar navbar-default" role="navigation">
          <div className="col-sm-7 col-sm-offset-2" style={{marginTop: 15}}>
            <SearchGithub />
          </div>
        </nav>
    		<div className="container">
  	    	<RouteHandler />
  	    </div>
      </div>
  	)
    
  }

});

module.exports = App;