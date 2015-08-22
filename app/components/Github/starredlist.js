var React = require('react');

var StarredList = React.createClass({

	render: function(){
		var starredList = this.props.starred.map(function(star){
			return (
				<li> 
					<p> {star.name} </p>
					<p> {star.html_url} </p>
				</li>
			)			
		});

		return (
			<ul class="list-inline">
				{starredList}
			</ul>
		)
	}

});

module.exports= StarredList;