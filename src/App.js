import { useState } from 'react';
import './App.css';

const App = (props) => {
  const [msg, setMsg] = useState('Hello Component');

  return (
    <div>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <p className="subtitle">Show message</p>
        <p className="alert alert-warning">{msg}</p>
        <p className="alert alert-dark">{props.msg}</p>
      </div>
    </div>
  );
};

export default App;
