import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you <s></s>are {props.age}{" "}
      </p>{" "}
      <br></br>
    </div>
  );
};

const App = () => {
  const name = "André";
  const age = 31;
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  );
};

export default App;
