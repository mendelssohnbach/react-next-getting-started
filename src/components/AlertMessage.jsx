import '../App.css';

export const AlertMessage = (props) => {
  const data = ['Hello!', 'Welcome...', 'Good-bye'];

  const actionAlert = () => {
    const re = data[Math.floor(Math.random() * data.length)];
    props.setAlert(`message: ${re}.`);
  };

  return (
    <div className="alert alert-primary h5 text-primary">
      <h5>{props.alert}</h5>
      <button onClick={actionAlert} className="btn btn-primary">
        Click me!
      </button>
    </div>
  );
};
