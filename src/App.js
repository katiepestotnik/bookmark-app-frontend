import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Home from './pages/Home';
import Signup from "./pages/Signup";
import Login from './pages/Login'
import { Switch, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
//bring inital state for token and url
import Global from "./Global";

function App() {
  const [state, setState] = useState({
    url: "https://bookmark-app-backend.herokuapp.com/",
    token: null
  });
  //check login
  useEffect(() => {
    const token = JSON.parse(window.localStorage.getItem("token"))
    console.log(token)
    if (token) {
      setState({ ...state, token: token.token })
    }
  },[])
  return (
    <Global className="App full-page-style">
      <main>
        <Switch>
          <Route
            exact path="/"
            render={(rp)=>state.token?<Main/>:<Home/>}>
          </Route>
          <Route
            path="/signup"
            render={(rp) => <Signup {...rp}/>}>
          </Route>
          <Route
            path="/login"
            render={(rp) => <Login {...rp}/>}>
          </Route>
          <Route
            path="/bookmark"
            render={(rp)=><Main {...rp}/>}>
          </Route>
      </Switch>
      </main>
      
    </Global>
  );
}

export default App;