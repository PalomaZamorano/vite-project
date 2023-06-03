
const ObjectList = ({list, removelistelement, updateList}) => {
    const {input, textarea, select} = list

    return(
        <div className="container text-center">
            <div className="row justify-content-md-center">
                <ol className="list-group list-group-numbered">
                    <li className="list-group-item" >
                        <h1>{input}</h1>
                        <div className="card">
                            <div className="card-body">
                            {textarea}
                            </div>
                        </div>
                        <div className="d-grid gap-2 col-6 mx-auto">
                            <span className="badge text-bg-primary">{select}</span>
                            <button type="button" className="btn btn-danger btn-sm" onClick={() => removelistelement(list.id)}>Eliminar</button>
                            <button type="button" className="btn btn-secondary btn-sm" onClick={() => updateList(list.id)}>Actualizar</button>
                        </div>
                    </li>
                </ol>
                </div>
            <div/>
        </div>
    )
}

export default ObjectList