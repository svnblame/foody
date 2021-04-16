import React, {useState} from "react";
import './App.css';
import StoreFront from "./StoreFront.js";
// import logo from './logo.svg';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  if (loggedIn) {
    return <>
      <StoreFront />
      <button className="btn btn-outline" onClick={() => setLoggedIn(false)}>Logout</button>
    </>;
  } else {
    return <>
      <h2>Please login</h2>
      <button className="btn btn-outline" onClick={() => setLoggedIn(true)}>Login</button>
    </>;
  }
}

export default App;
