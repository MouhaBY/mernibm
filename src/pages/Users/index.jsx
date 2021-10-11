import React, { useState, useEffect, useContext } from 'react';
import './Users.css';
import { getUsersList, deleteUser } from '../../WS/API';
import { useHistory } from "react-router-dom";
import { userDataContext } from '../../utils/context';
import DataTable from '../../components/DataTable';

const fetchUsers = (func) => {
    getUsersList().then(result =>{
        func(result.results);
    })
}

/*
function Users(){
    const [usersList, setUsersList] = useState([]);
    const history = useHistory();
    const editUser = (id) => history.push('/users/edit/'+id);
    const { userData } = useContext(userDataContext);

    useEffect(() => {
        fetchUsers(setUsersList)
    },[])

    return(
        <div className="UsersContainer">
            <h2 className="Userstitle">Liste des utilisateurs</h2>
            {userData?.isAdmin &&
            <a className="linkToAdd" href="/users/add"><input id="addButton" type="button" value="Ajouter"/></a>}
            <table className="Table">
                <thead>
                    <tr>
                        <th className="Cell">Username</th>
                        <th className="Cell">Contact</th>
                        <th className="Cell">Profil</th>
                        <th className="Cell">Actions</th>

                    </tr>
                 </thead>
                 <tbody>
                 {usersList && usersList.map((user) => (
                    <tr key={user._id}>
                        <td className="Cell">{user.username}</td>
                        <td className="Cell">{user.contact}</td>
                        <td className="Cell">{(user.isAdmin > 0) ? "Administrateur" : "Utilisateur"}</td>
                        {userData?.isAdmin &&
                        <td className="Cell">
                            <input id="editButton" type="button" value="Modifier" onClick={() => {editUser(user._id)}}/>
                            <input id="deleteButton" type="button" value="Supprimer" onClick={() => delete_user(setUsersList, user._id, userData._id)}/>
                        </td>}
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
*/

const headers = [{reference:"_id", name:'Id'}, {reference : "username", name: "Nom d'utilisateur"}, {reference:"contact", name:"Description"}, {reference:"isAdmin", name:"Est Admin"}, {reference:"actions", name:"Actions"}];


function Users(){
    const [usersList, setUsersList] = useState([]);
    const history = useHistory();
    const { userData } = useContext(userDataContext);
    const editUser = (data) => history.push('/users/edit/'+ data._id);
    const viewUser = (data) => history.push('/users/view/'+ data._id);
    const delete_user = async (data) => {
        if (data._id === userData._id){ 
            alert("Cannot delete current user"); 
        }
        else{
            const response = await deleteUser(data._id);
            alert("Utilisateur Id : "+ data._id +" "+ response?.message);
            fetchUsers(setUsersList);
        }
    }

    useEffect(() => {
        fetchUsers(setUsersList)
    },[])

    return(
        <div className="UsersContainer">
            <h2 className="Userstitle">Acceuil / Gestion des utilisateurs</h2>
            {userData?.isAdmin &&
            <a className="linkToAdd" href="/users/add"><input id="addButton" type="button" value="Ajouter"/></a>}
            <DataTable 
            title="Liste des comptes" 
            headers={headers} 
            datas={usersList} 
            edit={true} 
            editFunction={editUser} 
            deletion={true} 
            deleteFunction={delete_user} 
            viewFunction={viewUser} 
            isAdmin={userData?.isAdmin}
            />
        </div>
    )
}

export default Users;