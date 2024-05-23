import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("female");
  const [user, setUser] = useState({});

  const handleForm = (event) => {
    event.preventDefault();
    if (age < 0) {
      alert("Age cannot be negative");
      return;
    }
    setUser(
      (previous) =>
        (previous = {
          username: username,
          password: password,
          gender: gender,
          isSelected: isSelected,
          age: age,
        })
    );
  };

  const handelChangeUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleChangeCheckbox = (event) => {
    setIsSelected(!isSelected);
  };

  const handleSelect = (event) => {
    console.log("select");
    setGender(event.target.value);
  };

  const handleChangeAge = (event) => {
    setAge(event.target.value);
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
          <select onChange={handleSelect}>
            <option value="female">Female</option>
            <option value="male">Male</option>
          </select>
        </div>
        <div>
          <label>Do you agree with Terms?</label>
          <input type="checkbox" onChange={handleChangeCheckbox} />
        </div>
        <div>
          <label>Your age:</label>
          <input type="number" onChange={handleChangeAge} />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <h2>Form Data</h2>
      <p>Username: {user.username}</p>
      <p>Password: {user.password}</p>
      <p>Gender: {user.gender}</p>
      <p>Is selected: {isSelected ? "Yes" : "No"}</p>
      <p>Age: {user.age}</p>
    </div>
  );
}

export default App;
