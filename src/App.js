import Header from './components/Header';
import './App.css';
import MemoPage from './memo/MemoPage';

const App = () => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="my-3">Memo.</div>
        <MemoPage />
      </div>
    </div>
  );
};

export default App;
