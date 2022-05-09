import React from 'react';
import './Navbar.scss';
import { Images } from '../../constants/index.js';

const Navbar = (props) => {
    return (
        <nav className='app__navbar'>
            <div className='app__navbar-logo'>
                <img src={Images.logo} alt='logo' />
            </div>
            <ul className='app__navbar-links'>
                {['home', 'about', 'work', 'skills', 'contact'].map((item) => <li className='app__flex p-text' key={`link-${item}`}>
                    <div>
                        <a href={`#${item}`}>{item}</a>
                    </div>
                </li> )}
            </ul>
        </nav>
    );
}

export default Navbar;