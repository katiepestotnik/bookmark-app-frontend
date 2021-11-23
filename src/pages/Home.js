import { Route, Link, Switch } from 'react-router-dom';
//global state access to Context in Global
import { Context } from "../Global";
import { useContext} from 'react';
import Header from "../components/Header"
const Home = (props) => {

    const [state, setState] = useContext(Context);

    <Link to="/">
        <button onClick={() => {
            window.localStorage.removeItem("token")
            setState({...state, token:null})
        }}>
            LOGOUT
        </button>
    </Link>
    return (
        <div className="full-page-style">
        <Header/>
        <Link to="/signup"><h2 className="home-link">Sign Up</h2></Link>
        <Link to="/login"><h2 className="home-link">Login</h2></Link>
        </div>
    );
};
export default Home;