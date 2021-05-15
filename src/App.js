import { useState } from 'react';
import './App.css';
import { AlertMessage } from './components/AlertMessage';
import { CardMessage } from './components/CardMessage';

const App = () => {
  const [msg, setMsg] = useState('This is sample message!');

  const doAction = () => {
    let res = window.prompt('type your name:');
    setMsg(`Hello, ${res} !!`);
  };

  return (
    <div>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <div className="my-3">Hooks sample</div>
        <AlertMessage message={msg} />
        <CardMessage message={msg} />
        <div className="text-center">
          <button onClick={doAction} className="btn btn-primary">
            Click me!
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
