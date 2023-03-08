import React from 'react';
import NavTabs from './NavTabs';

function Header(){
    return(
    <nav className="navbar navbar-expand-md bg-secondary py-3">
        <div className="container">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse" id="navbarCollapse">
                <NavTabs />
            </div>
        </div>
    </nav>
    )
}

export default Header;