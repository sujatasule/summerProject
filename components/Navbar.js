import React from 'react';
import logo from '../logo.PNG';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <a className="navbar-brand ml-5" href="#">
                <img src={logo} alt="logo" style={{width:'100px'}}/>
            </a>
        <button 
            className="navbar-toggler" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
    
            <span className="navbar-toggler-icon">
            </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto">

                <li className="nav-item active">
                    <a className="nav-link text-white text-uppercase ml-5" href="#">Home&nbsp;<i className="fas fa-home"></i><span className="sr-only">(current)</span></a>
                </li>

                <li className="nav-item">
                    <a className="nav-link text-white text-uppercase ml-5" href="#">news</a>
                </li>

                <li className="nav-item">
                    <a className="nav-link text-white text-uppercase ml-5" href="#">contact us</a>
                </li>
      
            </ul>
        </div>  
        </nav>
    );
}

export default Navbar;