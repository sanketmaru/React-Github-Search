var React = require('react');
var Router = require('react-router');
var Repos = require('./Github/repos');
var UserProfile = require('./Github/userprofile');
var Starred = require('./Github/starred');

var Profile = React.createClass({
  mixins: [Router.State],
  
  getInitialState: function(){
    return {
      starred: [],
      bio: {},
      repos: []
    }
  },
  
  getGithubInfo: function(){
    var username = this.getParams().username;
    var usersRepoUrl = "https://api.github.com/users/" + username + "/repos";
    var userprofileUrl = "https://api.github.com/users/" + username;
    var userStarredUrl = "https://api.github.com/users/" + username +"/starred";
    
    // refactor this better
    $.get(usersRepoUrl, function(result) {
      
      if (this.isMounted()) {
        this.setState({          
          repos: result
        });
      }
    }.bind(this));    

    // refactor this better
    $.get(userprofileUrl, function(result) {
      
      if (this.isMounted()) {
        this.setState({          
          bio: result
        });
      }
    }.bind(this));

    // refactor this better
    $.get(userStarredUrl, function(result) {
      
      if (this.isMounted()) {
        this.setState({          
          starred: result
        });
      }
    }.bind(this));
  },

  componentDidMount: function(){
    this.getGithubInfo();
  },

  componentWillReceiveProps: function(){
    this.getGithubInfo();
  },

  render:function(){
    var username = this.getParams().username;
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={username} bio={this.state.bio} />
        </div>
        <div className="col-md-4">
          <Repos username={username}  repos={this.state.repos} />
        </div>
        <div className="col-md-4">
          <Starred username={username}  starred={this.state.starred} />
        </div>
      </div>
    )
  }

});

module.exports= Profile;