import React, { useState } from 'react';
import './App.css';

const App = (props) => {
  const [msg, setMsg] = useState('Hello');
  const [count, setCount] = useState(0);

  const timer = setInterval(() => {
    // setCount(count + 1);
  }, 5000);

  return (
    <div>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <p className="subtitle">Count number.</p>
        <p className="alert alert-warning">
          {msg}: {timer}
        </p>
        <p className="alert alert-dark">{props.msg}</p>
      </div>
    </div>
  );
};

export default App;
