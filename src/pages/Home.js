import Login from './Login';
import Signup from './Signup';
import { Route, Link, Switch } from 'react-router-dom';
//global state access to Context in Global
import { Context } from "../Global";
import { useContext, useEffect } from 'react';
const Home = (props) => {
    //<h1>url:{state.url}</h1> shows url from Global
    //if token show login else signup
    const [state, setState] = useContext(Context);
    //check for token
    useEffect(() => {
        const token = JSON.parse(window.localStorage.getItem("token"));
        console.log(token);
        if (token) {
            setState({ ...state, token: token.token })
        }
    }, []);
    const logout = <Link to="/">
        <button onClick={() => {
            window.localStorage.removeItem("token")
            setState({...state, token:null})
        }}>
            LOGOUT
        </button>
    </Link>
    return (
        <div>
        <Link to="/signup"><h2>SignUP</h2></Link>
        <Link to="/login"><h2>Login</h2></Link>
        {state.token?logout:null}
        </div>
    );
};
export default Home;