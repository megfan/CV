import React from "react";
import logo from '../../assets/logo.png';

export const Header: React.FC = () => {

    return (
    <header>
        <a href="#" className="logo_box">
            <img src={logo} alt="Logo" className="logo"/>
        </a>
        <nav>
            <ul className="header_nav">
                <li className='menu_item'>who</li>
                <li className='menu_item'>work</li>
                <li className='menu_item'>Say Hi</li>
            </ul>
        </nav>
    </header>   
    )
}