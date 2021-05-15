import '../App.css';

export const AlertMessage = (props) => {
  return <div className="alert alert-primary h5 text-primary">{props.message}</div>;
};
