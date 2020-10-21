import React, { useState } from "react";
import "./styles.css";
import UsersList from "./UsersList";

export default function App() {
  const [compteur, setCompteur] = useState(0);

  let data = [
    {
      id: Math.random().toString(),
      name: "Toto Lolo",
      age: "27",
      job: "FullStack Developpper"
    },
    {
      id: Math.random().toString(),
      name: "Jojo Bubu",
      age: "26",
      job: "System Admin"
    },
    {
      id: Math.random().toString(),
      name: "Toto Lolo",
      age: "27",
      job: "FullStack Developpper"
    },
    {
      id: Math.random().toString(),
      name: "Jojo Bubu",
      age: "16",
      job: "System Admin"
    }
  ];

  return (
    <div className="App">
      <UsersList users={data} />
      <code>{compteur}</code>
      <br />
      <button onClick={() => setCompteur((c) => c + 1)}>Increment</button>
    </div>
  );
}
