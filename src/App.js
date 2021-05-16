import { useState, useEffect } from 'react';
import AlertMessage from '../src/components/AlertMessage';
import Header from './components/Header';
import './App.css';

function App() {
  const [val, setVal] = useState(0);
  const [msg, setMsg] = useState('set a number...');

  const doChange = (event) => {
    setVal(event.target.value);
  };

  useEffect(() => {
    let total = 0;
    for (let i = 0; i <= val; i++) {
      total += 1;
    }
    setMsg(`total: ${total} .`);
  }, [val]);

  return (
    <div>
      <Header />
      <div className="container">
        <h4 className="my-3">Hooks sample</h4>
        <AlertMessage msg={msg} />
        <div className="from-group">
          <label htmlFor="Input:"></label>
          <input type="number" className="form-control" onChange={doChange} />
        </div>
      </div>
    </div>
  );
}

export default App;
