import React, { useState } from 'react';
import './Login.css';
import logoWhite from '../../assets/logo-white.svg';
import { Helmet } from 'react-helmet';
import { loginUser } from '../../WS/API';


const TITLE = 'Connexion | Solution';

function Login ({ setToken }){
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [errorMSG, setErrorMSG] = useState();

    
    const handleSubmit = async () => {
        setErrorMSG("");
        if (username && password){
            try{
                const token = await loginUser({ username, password });
                if(token){
                    setToken(token);
                }
                if(token?.error){
                    setErrorMSG(token.error);
                }    
            }
            catch(err){
                console.log(err)
            }
        }
        else{
            if(username){
                setErrorMSG("Mot de passe requis");
            }
            else if(password){
                setErrorMSG("Nom d'utilisateur requis");
            }
            else{
                setErrorMSG("Coordonnées de connexion obligatoires");
            }
        }
    }
    
    return(
            <div className="Container">
                <Helmet>
                    <title>{ TITLE }</title>
                </Helmet>
                <div className="SubContainer">
                    <img src={logoWhite} alt="Logo Scantech" />
                    <h1>Connexion</h1>
                    <form>
                        <label for="username">Nom d'utilisateur</label>
                        <input type="text" name="Nom d'utilisateur" id="username" onChange={e => setUsername(e.target.value)}/>
                        <label for="password">Mot de passe</label>
                        <input type="password" name="Mot de passe" id="password" onChange={e => setPassword(e.target.value)}/>
                        <span id="errorMSG">{errorMSG}</span>
                        <input id="connect" type="button" onClick={handleSubmit} value="Se connecter"/>
                    </form>
                </div>
            </div>
    )
}

export default Login;