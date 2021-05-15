import '../App.css';

export const CardMessage = (props) => {
  return <div className="card p-3 h5 border-primary text-center">{props.message}</div>;
};
