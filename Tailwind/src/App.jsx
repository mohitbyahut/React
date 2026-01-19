import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  let myObj = {
    username: "Mohit",
    age: 21,
  };

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-b-xl mb-4">
        Hello world!
      </h1>

      <Card username="chai aur code" btnText="click me"></Card>
      <br />
      <Card username="Aditi"></Card>
    </>
  );
}

export default App;
