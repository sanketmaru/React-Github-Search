var React = require('react');
var StarredList = require('./starredlist');

var Repos = React.createClass({

	render: function(){
		return (
			<div> 
				<h3> REPOS </h3>
				<StarredList starred={this.props.repos} />
			</div>			
		)
	}

});

module.exports= Repos;