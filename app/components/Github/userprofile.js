var React = require('react');

var UserProfile = React.createClass({

	render: function(){
		return (
			<div> 
				UserProfile <br/>
				Username: {this.props.username} <br/>
				Following: {this.props.bio.following}
				Followers: {this.props.bio.followers}
				Followers: {this.props.bio.company}
				Email: {this.props.bio.email}
			</div>
		)
	}

});

module.exports= UserProfile;