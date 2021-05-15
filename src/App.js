import './App.css';
import { AlertMessage } from './components/AlertMessage';
import { CardMessage } from './components/CardMessage';

const App = () => {
  return (
    <div>
      <h1 className="bg-primary text-white display-4">React</h1>
      <div className="container">
        <div className="my-3">Hooks sample</div>
        <AlertMessage />
        <CardMessage />
      </div>
    </div>
  );
};

export default App;
