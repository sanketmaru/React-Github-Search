var React = require('react');

var Notes = React.createClass({

	render: function(){
		return (
			<div> 
				<h3> Notes </h3>
				{this.props.notes} 
			</div>

		)
	}

});

module.exports= Notes;