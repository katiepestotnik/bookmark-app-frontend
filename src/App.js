import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Home from './pages/Home';
import Signup from "./pages/Signup";
import Login from './pages/Login'
import { Switch, Route } from 'react-router-dom';
//bring inital state for token and url
import Global from "./Global";

function App() {
  return (
    <Global className="App full-page-style">
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route
            path="/signup">
            render={(rp) => <Signup {...rp}/>}
          </Route>
          <Route
            path="/login"
            render={(rp) => <Login {...rp}/>}>
          </Route>
          <Route path="/bookmark">
            <Main/>
          </Route>
      </Switch>
      </main>
      
    </Global>
  );
}

export default App;