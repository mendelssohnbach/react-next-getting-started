import { useState } from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);

  function doAction() {
    setCounter(() => counter + 1);
  }

  return (
    <div>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <div className="alert alert-primary text-center">
          <p className="h5 mb-4">{`*** count: ${counter} ***`}</p>
          <button className="btn btn-primary" onClick={doAction}>
            Click
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
