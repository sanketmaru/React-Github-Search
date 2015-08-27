var React = require('react');

var CollapseComponent = React.createClass({
  
  render:function(){  	
  	return (
  		<div id={this.props.targetElement} className="panel-collapse collapse">
        <div className="panel-body">{this.props.name}</div>
        <div className="panel-footer">{this.props.age}</div>  			
   		</div>
  	)
  }

});

module.exports = CollapseComponent;
