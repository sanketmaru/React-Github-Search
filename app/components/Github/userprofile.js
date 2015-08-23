var React = require('react');

var UserProfile = React.createClass({

	render: function(){
		return (
			<div>
				<h3> UserProfile </h3>  
				<ul className = "list-group">
					<li className="list-group-item">
						<img className="img-item" src={this.props.bio.avatar_url} />
					</li>
					<li className="list-group-item">
						<a href={this.props.bio.html_url} > Username: {this.props.username} </a>
					</li>
					<li className="list-group-item">
						Following: {this.props.bio.following}
					</li>
					<li className="list-group-item">
						Followers: {this.props.bio.followers}
					</li>
					<li className="list-group-item">
						Company: {this.props.bio.company}
					</li>
					<li className="list-group-item">
						Email: {this.props.bio.email}
					</li>
				</ul>							
			</div>
		)
	}

});

module.exports= UserProfile;