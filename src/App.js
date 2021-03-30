import "./styles.css";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  const updateField = (e) =>
    setName({ ...name, [e.target.name]: e.target.value });

  return (
    <div className="App">
      <form>
        <input
          type="text"
          value={name.firstName}
          name="firstName"
          onChange={updateField}
          //onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <input
          type="text"
          value={name.lastName}
          name="lastName"
          onChange={updateField}
          //onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
        <h2>Your first name is - {name.firstName}</h2>
        <h2>Your last name is - {name.lastName}</h2>
        <h2>{JSON.stringify(name)}</h2>
      </form>
    </div>
  );
}
