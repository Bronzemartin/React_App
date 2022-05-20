import React, { Component } from 'react';
import './Navbar.css';


class Navbar extends Component {
    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo"><i className="fab fa-react"></i>
                </h1>
                <div className="oracle">
                    <img src="/images/oracle.png" alt=""/>
                </div>
                <div className="Red_Bull">
                    <img src="/images/Red_Bull.png" alt=""/>
                </div>
                
                
            </nav>
        )
    }
}

export default Navbar