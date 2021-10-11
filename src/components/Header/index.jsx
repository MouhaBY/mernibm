import React, { useState, useContext } from 'react';
import './Header.css';
import profilePic from '../../assets/profile.png';
import burgerMenu from '../../assets/menu.png';
import { showBarContext, userDataContext } from '../../utils/context';


function Header({ setToken }) {
    const [showDropdown, setShowDropdown] = useState(false);
    const { toggleShowBar } = useContext(showBarContext);
    const { userData } = useContext(userDataContext);
    

    const disconnect = () => {
        //sessionStorage.clear()
        const token = {token: null};
        setToken(token);
    }

    const showMenu = () => {
        setShowDropdown(!showDropdown)
    }

    return(
        <div>
        <div className="Header">
            <div onClick={toggleShowBar}>
                <img id="burgerMenu" src={burgerMenu} alt="burgerMenu" />
            </div>
            <h1 id="HeaderTitle">Welcome to my application</h1>
            <div className="Profile" onClick={showMenu}>
                <span className="userInfo">{"Connecté en tant que : " + userData?.contact }</span>
                <span className="userInfo">{userData?.isAdmin ===1 ? " (Administrateur)" : "(Utilisateur)"}</span>
                <img id="profilePic" src={profilePic} alt="Profile" />
            </div>
        </div>
        {showDropdown ? (
        <div className="Dropdown">
            <input id="DisconnectButton" type="button" onClick={disconnect} value="Se déconnecter"/>
        </div>)
        :( null )}
        </div>
    )
}

export default Header;