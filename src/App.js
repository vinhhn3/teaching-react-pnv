import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});

  const handleForm = (event) => {
    event.preventDefault();
    setUser((previous) => {
      console.log(previous);
      previous = {
        username: username,
        password: password,
      };
    });

    console.log(user);
  };

  const handelChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="App">
      <h1>Form</h1>
      <form onSubmit={handleForm}>
        <div>
          <label>Username</label>
          <input onChange={handelChangeUsername} type="text" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" onChange={handleChangePassword} />
        </div>
        <div>
          <select>
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
        </div>
        <div>
          <label>Do you agree with Terms?</label>
          <input type="checkbox" />
        </div>
        <div>
          <label>Your age:</label>
          <input type="number" />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <h2>Form Data</h2>
    </div>
  );
}

export default App;
