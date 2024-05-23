import axios from "axios";
import { useState } from "react";
import DataTable from "react-data-table-component";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSelected, setIsSelected] = useState(false);
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("female");
  const [user, setUser] = useState({});
  const [data, setData] = useState({});
  const [posts, setPosts] = useState([{}]);

  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
    },
    {
      name: "UserId",
      selector: (row) => row.userId,
      sortable: true,
    },
    {
      name: "Title",
      selector: (row) => row.title,
    },
    {
      name: "Body",
      selector: (row) => row.body,
    },
  ];

  const handleForm = async (event) => {
    event.preventDefault();
    if (age < 0) {
      alert("Age cannot be negative");
      return;
    }
    setUser(() => ({
      username: username,
      password: password,
      gender: gender,
      isSelected: isSelected,
      age: age,
    }));

    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      user
    );

    console.log(res.data);
    setData(res.data);

    const getRes = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log(getRes);
    setPosts(getRes.data);
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
      <h2>Result from api</h2>
      <p>Data id: {data.id}</p>
      <p>Username:{data.username} </p>
      <p>Password: {data.password} </p>
      <h2>Table</h2>
      <DataTable columns={columns} data={posts} pagination />
    </div>
  );
}

export default App;
