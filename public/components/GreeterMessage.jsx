var React = require('react');

//presentational components = take props and renders it to the screen
var GreeterMessage = React.createClass({
  render: function(){
    //two props (name and message) passed from the parent
    var name = this.props.name;
    var message = this.props.message;

    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>
      </div>
    );
  }
});

module.exports = GreeterMessage;
