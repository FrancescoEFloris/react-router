import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <Link to="/" > Homepage </Link>
            <Link to="/ourproducts" > Our products </Link>
            <Link to="/aboutus" > About us </Link>
        </nav>
    );
};

export default Navbar;