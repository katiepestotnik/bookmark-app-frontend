import { Link } from 'react-router-dom';
import { Context } from "../Global";
import { useContext, useEffect } from 'react';
const Header = (props) => {
    const [state, setState] = useContext(Context);
    const logout = <Link to="/">
    <button className="button-style"onClick={() => {
        window.localStorage.removeItem("token")
        setState({...state, token:null})
    }}>
        LOGOUT
    </button>
</Link>
    return (
        <div className="nav-background">
        <nav className="nav">
            <Link to="/bookmark"
            className="title">
                <div >Bookmark'd</div>
                </Link>
                <Link to="/">{state.token?logout:null}</Link>
            </nav>
        </div>
    );
};
export default Header;