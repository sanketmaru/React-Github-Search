var React = require('react');
var CollapseComponent = require('../collapse');

var StarredList = React.createClass({

	render: function(){
		var starredList = this.props.starred.map(function(star, i){
			return (				
				<div>
					<div className="list-group-item"> 
						<a href="#ava" data-toggle="collapse"> {star.name} </a>
					</div>
					<CollapseComponent targetElement={'ava'} name={'snaket'} age={'24'} />
				</div>				
			)			
		});

		return (
			<div className="list-group">
				{starredList}
			</div>
		)
	}

});

module.exports= StarredList;