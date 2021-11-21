import { Link } from 'react-router-dom';

const Header =(props)=>{
    return (
        <div className="nav-background">
        <nav className="nav">
            <Link to="/"
            className="title">
                <div >Bookmark'd</div>
            </Link>
            </nav>
        </div>
    );
};
export default Header;