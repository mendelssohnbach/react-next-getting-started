import usePersist from '../Persist';
import Memo from './Memo';

const MemoPage = () => {
  const [mode, setMode] = usePersist('mode', 'default');

  return (
    <div>
      <h5 className="my-3">mode: {mode}</h5>
      <div className="alert alert-primary pd-0">
        {/* AddForm */}
        {/* FindForm */}
        {/* DelForm */}
      </div>
      {/* Memo */}
      <Memo />
    </div>
  );
};

export default MemoPage;
