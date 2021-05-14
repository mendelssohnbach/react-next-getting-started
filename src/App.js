import './App.css';

function App(props) {
  return (
    <div>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <p className="subtitle">{props.title}</p>
        <p>{props.message}</p>
      </div>
    </div>
  );
}

export default App;
