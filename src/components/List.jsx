import PropTypes from 'prop-types';
import ObjectList from './ObjectList';

const List = ({list, removelistelement, updateList}) => {

    return(
        <div className="container text-center">
            <h1>Gatitos</h1>
            <ul className="top-2">{list.map((l) => (
                <ObjectList key={l.id} list={l} removelistelement={removelistelement} updateList={updateList}/>
                ))
                }
            </ul>
        </div>

    )

}

List.propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    input: PropTypes.string,
    textarea: PropTypes.string,
    select: PropTypes.string
  })).isRequired
};


export default List
