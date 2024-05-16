import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Card from "./components/Card";
import USERSDATA from "./data/data";

function App() {
  const age = 25;
  const [hidden, setHidden] = useState(true);
  console.log(hidden);

  return (
    <div className="App">
      <button onClick={() => setHidden(!hidden)}>Toogle</button>
      {hidden && <Banner />}

      <Banner />

      <Card />
      <Card name="John Doe" age={age} address="123 Main St, City, State" />

      {USERSDATA.map((user, index) => (
        <Card
          // key={user.id}
          key={index}
          name={user.name}
          age={user.age}
          address={user.address}
        />
      ))}
    </div>
  );
}

export default App;
