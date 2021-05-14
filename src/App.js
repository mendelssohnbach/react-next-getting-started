import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: 'Hello Component',
    };
  }

  render() {
    return (
      <div>
        <h1 className="bg-primary text-white display-4">React</h1>
        <div className="container">
          <p className="subtitle">Show message</p>
          <p className="alert alert-warning">{this.state.msg}</p>
          <p className="alert alert-dark">{this.props.msg}</p>
        </div>
      </div>
    );
  }
}

export default App;
