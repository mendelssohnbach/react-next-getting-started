import { useState } from 'react';
import './App.css';
import { AlertMessage } from './components/AlertMessage';
import { CardMessage } from './components/CardMessage';

const App = () => {
  const [alert, setAlert] = useState('This is alert message!');
  const [card, setCard] = useState('This is card message');

  return (
    <div>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <div className="my-3">Hooks sample</div>
        <AlertMessage alert={alert} setAlert={setAlert} />
        <CardMessage card={card} setCard={setCard} />
        <hr />
        <div className="text-right">
          <p>{alert}</p>
          <p>{card}</p>
        </div>
      </div>
    </div>
  );
};

export default App;
