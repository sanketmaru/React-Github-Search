var React = require('react');
var StarredList = require('./starredlist');

var Starred = React.createClass({

	render: function(){
		return (
			<div> 
				<h3> Starred </h3>
				<StarredList starred={this.props.starred} />
			</div>
		)
	}

});

module.exports= Starred;