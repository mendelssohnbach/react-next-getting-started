import { useState } from 'react';
import '../App.css';

export const CardMessage = (props) => {
  const [count, setCount] = useState(0);

  const actionCard = () => {
    setCount(count + 1);
    props.setCard(`card counter: ${count} count.`);
  };

  return (
    <div className="card p-3 h5 border-primary text-center">
      <h5>{props.card}</h5>
      <button onClick={actionCard} className="btn btn-primary">
        Click me!
      </button>
    </div>
  );
};
