import React, { useState, useEffect } from "react";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import QuizApp from "./components/Quiz/Quiz";
import Footer from "./components/Footer/Footer";
import Programmes from "./components/Programmes/Programmes";
import BlogPage from "./components/Blogs/components/BlogPage";
import Login from "./components/Login/Login";
import Signup from "./components/Login/SignUp";
import "./App.css";

function App() {
  const [Username, setUsername] = useState("");
  const [login, setLogin] = useState(false);
  const [mode, setMode] = useState("light");

  function setUser(username) {
    setUsername(username);
    setLogin(true);
    window.localStorage.setItem("username", username);
  }

  function signOut() {
    setUsername("");
    setLogin(false);
    window.localStorage.removeItem("username");
  }

  const toggleMode = () => {
    mode === "dark" ? setMode("light") : setMode("dark");
  };

  useEffect(() => {
    window.localStorage.username
      ? setUsername(window.localStorage.username)
      : setUsername("");
    window.localStorage.username ? setLogin(true) : setLogin(false);
  }, []);

  return (
    <Router>
      <div
        className="app-container"
        style={
          mode === "dark"
            ? { backgroundColor: "black", color: "white" }
            : { backgroundColor: "white", color: "black" }
        }
      >
        <Navbar
          changeMode={toggleMode}
          username={Username}
          login={login}
          signout={signOut}
        />
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
          <Route path="/Blog">
            <BlogPage />
          </Route>
          <Route path="/login">
            <Login setuser={setUser} />
          </Route>
          <Route path="/sign-up">
            <Signup setuser={setUser} />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
