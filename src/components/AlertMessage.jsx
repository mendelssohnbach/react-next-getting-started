import '../App.css';

export const AlertMessage = (props) => {
  const data = props.data;
  const msg = JSON.stringify(data);
  console.log(msg);

  return (
    <div className="alert alert-primary h5 text-primary">
      <h5>{msg}</h5>
      <hr />
      <table className="table h6">
        <tbody>
          <tr>
            <th>Name</th>
            <td>{data.name}</td>
          </tr>
          <tr>
            <th>Mail</th>
            <td>{data.mail}</td>
          </tr>
          <tr>
            <th>Age</th>
            <td>{data.age}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
