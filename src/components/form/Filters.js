import FilterHouses from "./FilterHouses";
import FilterName from "./FilterName";
import '../../styles/Form.scss';

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
}

export default Filters;