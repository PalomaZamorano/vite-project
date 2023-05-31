const List = ({list}) => {

    return(
        <div className="container">
            <h1>Gatitos</h1>
            <ul className="top-2">{list.map((l) => (<li key={l.id}>{l.textarea}</li>))}</ul>
        </div>

    )

}

export default List
