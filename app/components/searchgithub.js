var React = require('react');
var Router = require('react-router');

var SearchGithub = React.createClass({
  mixins: [Router.Navigation],
  
  handleSumbmit: function(){
    var username = this.refs.username.getDOMNode().value;
    this.refs.username.getDOMNode().value = '';
    this.transitionTo('profile', {username: username});
  },

  render: function(){
    return (
      <div className="col-sm-12">
        <form onSubmit={this.handleSumbmit} >
          <div className="form-group col-sm-7">
            <input type="text" className="form-control" ref="username" /> 
          </div>
          <div className="form-group col-sm-5">
            <button type="submit" className="btn btn-block btn-primary"> Search Github </button> 
          </div>          
        </form>
      </div>
    )
  },

  componentDidMount : function(){
    this.transitionTo('profile', {username: 'sanketmaru'});
  }

});

module.exports = SearchGithub;