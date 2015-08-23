var React = require('react');

var StarredList = React.createClass({

	render: function(){
		var starredList = this.props.starred.map(function(star){
			return (
				<li className="list-group-item"> 
					<p> {star.name} </p>
					<p> {star.html_url} </p>
				</li>
			)			
		});

		return (
			<ul className="list-group">
				{starredList}
			</ul>
		)
	}

});

module.exports= StarredList;