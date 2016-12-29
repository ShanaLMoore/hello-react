
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

//presentational component - doesn't maintain it's own state. calls a function when form gets submitted.
var GreeterForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();

    var name = this.refs.name.value;

    if (name.length > 0){
      this.refs.name.value = '';
      this.props.onNewName(name);
    }
  },

  render: function(){
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="name"/>
          <button>Set Name</button>
        </form>
      </div>
    );
  }
});


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
      name: this.props.name
    };
  },
  handleNewName: function(name){
    this.setState({
      name: name
    });
  },
  render: function(){
    var name = this.state.name;
    var message = this.props.message;

 //container components should only render children
    return (
      <div>
        <GreeterMessage name={name} message={message} />
        <GreeterForm onNewName={this.handleNewName}/>
      </div>
    );
  }
});

var firstName = "Shana";

ReactDOM.render(
  <Greeter name={firstName}/>,
  document.getElementById('app')
);
