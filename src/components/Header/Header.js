import React, {useState} from 'react';
import NavTabs from './NavTabs';
import LogoBlue from '../../assets/logoBlue.png'
import "./Header.css"

function Header(){
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 5){
            setNavbar(true);
        } else{
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    return(
    <nav className={navbar ? "navbar navbar-expand-md sticky-top active": "navbar navbar-expand-md sticky-top"}>
        <div className="container">
            <img className="navbar-brand img-fluid" src={LogoBlue} alt="Logo of a blue letter A" style={{height: '50px'}}/>
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