import React from "react";
import './App.css';
import Counter from "./components/Counter";
import NavBar from "./components/NavBar.js";

function App() {
  return (
    <div className="App">
			<NavBar />
			<div className="container-fluid">
      	<Counter />
			</div>
    </div>
  );
}

export default App;
