import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="header-no">
            <div className="logo-no">
                <img src="https://img.icons8.com/nolan/64/car-fire.png" alt=""/>
                <p>Max.Detailing</p>
            </div>
            <div className="menu-no">
                <Link to={'/'} className="link">HOME</Link>
                <Link to={'/service'} className="link">SERVICES</Link>
                <Link to={'/feedback'} className="link">FEEDBACK</Link>
                <Link to={'/contact'} className="link">CONTACT</Link>
            </div>
        </div>
    );
};

export default Header;