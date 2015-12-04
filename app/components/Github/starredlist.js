var React = require('react');
var CollapseComponent = require('../collapse');
var $ = require('jquery');

var StarredList = React.createClass({

  render: function(){
		var starredList = this.props.starred.map(function(star, i){
      var collapseId = "collapse" + i;
      var hrefId = "#" + collapseId;
			return (				
				<div className="panel-group" key={i}>
					<div className="panel panel-default"> 
            <div class="panel-heading">
              <h4 class="panel-title">
                <a href={hrefId} data-toggle="collapse"> {star.name} </a>
              </h4>
            </div>
            <CollapseComponent targetElement={collapseId} name={'snaket'} age={'24'} />
					</div>
					
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