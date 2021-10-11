import './DataTable.css';

function DataTable({title, headers, datas, edit, editFunction, deletion, deleteFunction, viewFunction, isAdmin}){
    return(
        <div className="DataTableContainer">
            <h2 className="DataTabletitle">{title}</h2>
            <table className="Table">
                <thead>
                    <tr>
                    {headers && headers.map((head) => (
                        <th key={head.reference} className="Cell">{head.name}</th>))}
                    </tr>
                 </thead>
                 <tbody>
                 {datas && datas.map((data) => (
                    <tr key={data._id}>
                        {headers.map((head) => (
                            (head.reference === "actions") ?
                            <div key={data._id} className="Buttons">
                                <input id="viewButton" type="button" value="Consuler" onClick={()=>{ viewFunction(data) }}/>
                                { edit && isAdmin &&
                                <input id="editButton" type="button" value="Modifier" onClick={()=>{ editFunction(data) }}/>}
                                { deletion && isAdmin &&
                                <input id="deleteButton" type="button" value="Supprimer" onClick={() => { deleteFunction(data) }}/>}
                            </div> :
                            <td key={head.reference} className="Cell">{data[head.reference]}</td>
                        ))}
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default DataTable;