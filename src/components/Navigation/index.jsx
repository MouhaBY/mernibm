import React, { useState, useContext } from 'react';
import './Navigation.css';
import logo from '../../assets/STSlogo.PNG';
import SideButton from '../SideButton';
import SubSideButton from '../SubSideButton';
import { showBarContext } from '../../utils/context';


function Navigation(){
    const [showExploitation, setShowExploitation] = useState(false);
    const [showDashboard, setShowDashboard] = useState(false);
    const { showBar } = useContext(showBarContext);

    const showSubMenuExploitation = () => {
        setShowExploitation(!showExploitation);
    }

    const showSubMenuDashboard = () => {
        setShowDashboard(!showDashboard);
    }

    return(
        showBar ? 
        <nav className="NavBar">
            <a id="linkLogo" href="/"><img href="/" id="MainLogo" src={logo} alt="Logo Solution" /></a>
            <div onClick={showSubMenuDashboard}><SideButton name="Tableau de bord" hasChildren={true} opened={showDashboard}/></div>
            {
                showDashboard ? ( 
                    <div>
                        <SubSideButton name= "Général" url="/dashboard" /> 
                    </div>
                ) : (null)
            }
            <div onClick={showSubMenuExploitation}><SideButton name="Exploitation" hasChildren={true} opened={showExploitation}/></div>
            {
                showExploitation ? ( 
                    <div>
                        <SubSideButton name= "Suivi" url="/exploitations" /> 
                        <SubSideButton name= "Historique" url="/exploitations" /> 
                    </div>
                ) : (null)
            }
            <a href="/datas"><SideButton name="Données"/></a>
            <a href="/users"><SideButton name="Utilisateurs"/></a>
            <a href="/configurations"><SideButton name="Configuration"/></a>
        </nav>
        : <div></div>
    )
}

export default Navigation;
