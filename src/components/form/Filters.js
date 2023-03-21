import FilterHouses from "./FilterHouses";
import FilterName from "./FilterName";

function Filters({ SearchName, filterName }) {
    return (
    <form className= 'form'>
            <FilterName SearchName={SearchName} filterName={filterName}/>
            <FilterHouses/>
    </form>
    );
}

export default Filters;