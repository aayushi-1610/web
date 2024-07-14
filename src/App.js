import React, { useState } from 'react'
import Home from "./components/Home/Home"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Header/Navbar'
import Quiz from './components/Quiz/Quiz';

function App() {
  const [mode, setMode] = useState('light');
  console.log(mode);
  const toggleMode = () => {
    mode === "dark" ? setMode("light") : setMode("dark");
  }

  return (
    <Router>
      <div style={mode === "dark" ? { backgroundColor: "black", color: 'white' } : { backgroundColor: "white", color: "black" }}>
        <Navbar changeMode={toggleMode} login={false} />
        <Switch>
          <Route exact path="/">
            <Home mode />
          </Route>
          <Route path="/Quiz">
            <Quiz />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
