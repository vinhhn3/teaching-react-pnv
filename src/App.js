import { useState } from "react";
import "./App.css";
import Age from "./components/Age";
import Card from "./components/Card";

function App() {
  const [age, setAge] = useState(10); // state
  const hello = "Hello World"; // variable

  const [user, setUser] = useState({
    id: 1,
    name: "Vinh Hoang",
    age: 20,
    address: "Hanoi",
  });

  const [usersData, setUsersData] = useState([
    {
      id: 1,
      name: "Vinh Hoang",
      age: 20,
      address: "Hanoi",
    },
    {
      id: 2,
      name: "John Doe",
      age: 25,
      address: "New York",
    },
    {
      id: 3,
      name: "Jane Doe",
      age: 30,
      address: "California",
    },
  ]);

  const increaseAge = () => {
    setAge(age + 1);
  };

  const decreaseAge = () => {
    setAge(age - 1);
  };

  const clearUsesData = () => {
    setUsersData([]);
  };

  return (
    <div className="App">
      <h1>Age: {age}</h1>
      <h2>
        <Age age={age} />
      </h2>
      <h3>
        <Card user={user} />
      </h3>
      <p>
        {usersData.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </p>
      <button onClick={increaseAge}>Increase age</button>
      <button onClick={decreaseAge}>Decrease Age</button>
      <button onClick={clearUsesData}>Clear UsersData</button>
      <form>
        <div>
          <label>Username</label>
          <input type="text" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" />
        </div>
        <div className="div">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
