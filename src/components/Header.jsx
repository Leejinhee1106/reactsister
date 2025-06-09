import React from 'react';
import {Outlet, Link, NavLink} from 'react-router-dom';

const Header = () => {
    return(
        <header>
             <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Note</Link>
                    
                </div>
             </nav>
        </header>
    )
}

export default Header;