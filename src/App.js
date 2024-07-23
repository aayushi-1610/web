import React, { useState } from 'react'
import Home from "./components/Home/Home"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Header/Navbar'
import QuizApp from './components/Quiz/Quiz';
import Footer from './components/Footer/Footer';
import Programmes from './components/Programmes/Programmes';
import BlogPage from './components/Blogs/components/BlogPage';
import "./App.css";

function App() {
  const Username = "Test01";
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    mode === "dark" ? setMode("light") : setMode("dark");
  }

  return (
    <Router>
      <div className='app-container' style={mode === "dark" ? { backgroundColor: "black", color: 'white' } : { backgroundColor: "white", color: "black" }}>
        <Navbar changeMode={toggleMode} login={false} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Quiz">
            <QuizApp username={Username} />
          </Route>
          <Route path="/Programmes">
            <Programmes />
          </Route>
          <Route path='/Blog'>
            <BlogPage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
