var React =  require('react');
var GreeterMessage = require('GreeterMessage');
var GreeterForm = require('GreeterForm');


//container component - maintains state for the application (name) when state gets updated, it'll update it's children (GreeterMessage) because it relies on the name state.
// State can be changed, Props can't.
var Greeter = React.createClass({
  getDefaultProps: function(){
    return  {
      name: 'React',
      message: 'This is the default message!'
    };
  },
  getInitialState: function(){
    return {
      name: this.props.name,
      message: this.props.message
    };
  },
  handleNewData: function(updates){
    this.setState(updates);
  },
  render: function(){
    var name = this.state.name;
    var message = this.state.message;

 //container components should only render children
    return (
      <div>
        <GreeterMessage name={name} message={message} />
        <GreeterForm onNewData={this.handleNewData}/>
      </div>
    );
  }
});

module.exports = Greeter;
