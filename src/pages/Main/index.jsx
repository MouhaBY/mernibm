import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import './Main.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Hello from '../Hello';
import Error from '../Error';
import Dashboard from '../Dashboard';
import Exploitation from '../Exploitation';
import Users from '../Users';
import AddUser from '../AddUser';
import EditUser from '../EditUser';
import Datas from '../Datas';
import ViewUser from '../ViewUser';
import { ShowBarProvider, userDataContext } from '../../utils/context';
import { useEffect } from 'react';
import { getUser } from '../../WS/API';

const TITLE = 'Solution';

const getUserId = () => {
    const tokenString = localStorage.getItem('token');
    const token = JSON.parse(tokenString);
    return token?.userId
};

const getUserData = (userId, funct) => {
    getUser(userId).then(result =>{
        funct(result);
    })
}

function Main({ setToken }){
    const { toggleUserData } = useContext(userDataContext);

    useEffect(()=>{
        getUserData(getUserId(), toggleUserData )
    },[toggleUserData])

    return(
        <div className="MainContainer">
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>
            <ShowBarProvider>
                <Navigation/>
                <div className="MainSubContainer">
                    <Header setToken={setToken}/>
                    <Router>
                        <Switch>
                            <Route exact path="/">
                                <Hello />
                            </Route>
                            <Route exact path="/dashboard">
                                <Dashboard />
                            </Route>
                            <Route exact path="/exploitations">
                                <Exploitation />
                            </Route>
                            <Route exact path="/users">
                                <Users />
                            </Route>
                            <Route exact path="/datas">
                                <Datas />
                            </Route>
                            <Route exact path="/users/add">
                                <AddUser />
                            </Route>
                            <Route exact path="/users/edit/:id">
                                <EditUser />
                            </Route>
                            <Route exact path="/users/view/:id">
                                <ViewUser />
                            </Route>
                            <Route>
                                <Error />
                            </Route>
                        </Switch>
                    </Router>
                </div>
            </ShowBarProvider>
        </div>
    )
}

export default Main;