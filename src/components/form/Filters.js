import FilterHouses from "./FilterHouses";
import FilterName from "./FilterName";
import '../../styles/Form.scss';
import PropTypes from 'prop-types';

function Filters({ SearchName, filterName, SearchHouse }) {
    const handleSubmit = (event) => {
        event.preventDefault();
    };
    
    return (
    <form className= 'form' onSubmit={handleSubmit}>
            <FilterName SearchName={SearchName} filterName={filterName}/>
            <FilterHouses SearchHouse={SearchHouse} />
    </form>
    );
};

Filters.propTypes = {
    SearchName: PropTypes.func,
    filterName: PropTypes.string,
    SearchHouse:PropTypes.func,
  };

export default Filters;