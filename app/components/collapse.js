var React = require('react');

var CollapseComponent = React.createClass({
  
  render:function(){  	
  	return (
  		<div id={this.props.targetElement} className="collapse">
  			<p> {this.props.name} </p>
				<p> {this.props.age} </p>
   		</div>
  	)
  }

});

module.exports = CollapseComponent;
