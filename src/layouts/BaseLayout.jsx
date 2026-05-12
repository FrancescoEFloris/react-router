import { Outlet, Link } from "react-router-dom";

function BaseLayout() {
    return (
        <>
            <header className="headerWrap">
                <h1>Header</h1>
            </header>
            <nav className='nav' >
                <Link className='navItem' to="/" > Homepage </Link>
                <Link className='navItem' to="/ourproducts" > Our products </Link>
                <Link className='navItem' to="/aboutus" > About us </Link>
            </nav>

            <Outlet />

            <footer className="footerWrap">
                <p>Footer</p>
            </footer>
        </>
    );
}

export default BaseLayout;