import { Link } from 'react-router-dom';

const Header =(props)=>{
    return (
        <nav>
            <Link to="/">
                <div>Bookmark App</div>
            </Link>
        </nav>
    );
};
export default Header;