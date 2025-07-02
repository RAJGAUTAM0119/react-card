import "./App.css";

function App(props) {
  return (
    <div className="card">
      <img id="profile-pic" src={props.img} alt="pic"></img>
      <p id="user-name">{props.name}</p>
      <p id="user-email">{props.email}</p>
    </div>
  );
}

export default App;
