import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import {createContext, useState, useEffect} from 'react'
import { Route, Link, Switch } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home'
export const GlobalCtx = createContext(null);

function App() {
  const [globalState, setGlobalState] = useState({
    //herokuapp link here
    url: "http://localhost:3000", token: null
  });
  //Seeing if logged in
  useEffect(() => {
    const token = JSON.parse(window.localStorage.getItem("token"))
    console.log(token)
    if (token) {
      setGlobalState({ ...globalState, token: token.token })
    }
  },[])
  return (
    <GlobalCtx.Provider value={{globalState, setGlobalState}}>
      <div className="App full-page-style">
        <Link to="/">
          <h1>Bookmark'd</h1>
        </Link>
        <Header />
        <main>
          <Switch>
            <Route
              exact path="/"
              render={(rp) => globalState.token?<Main/>:<Home/>}>
            </Route>
            <Route
              path="/signup"
              render={(rp) => <Signup {...rp}/>}>
            </Route>
            <Route
              path="/login"
              render={(rp) => <Login {...rp}/>}>
            </Route>
          </Switch>
        </main>
    </div>
    </GlobalCtx.Provider>
  );
}

export default App;
