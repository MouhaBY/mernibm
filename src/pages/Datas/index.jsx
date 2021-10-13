import { Helmet } from 'react-helmet';
import './Datas.css';
import DataTable from '../../components/DataTable';

const TITLE = "Datas | Solution";
const headers = [
    {reference:"_id", name:'Id'}, 
    {reference : "code", name: "Code"}, 
    {reference:"name", name:"Description"}, 
    {reference: "active", name:"Actif", type:"bool"},
    {reference:"actions", name:"Actions", type:"actions"}
];

const datas = [
    {"_id":"1", "code":"12", "name":"123", "active":true}, 
    {"_id":"2", "code":"21", "name":"212", "active":true}, 
    {"_id":"3", "code":"31", "name":"312"},
    {"_id":"4", "code":"41", "name":"412", "active":false}
];

const editFunction = (data)=>{
    alert("edit clicked on dataId : " + data._id);
}
const deleteFunction = (data) =>{
    alert("delete clicked on dataId : " + data._id)
}

function Datas(){
    return(
        <div className="HelloContainer">
            <Helmet>
                <title>{ TITLE }</title>
            </Helmet>
            <DataTable title="Liste des données" headers={headers} datas={datas} edit={true} editFunction={editFunction} deletion={true} deleteFunction={deleteFunction}/>
        </div>
    )
}

export default Datas;