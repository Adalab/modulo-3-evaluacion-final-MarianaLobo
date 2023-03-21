import FilterHouses from "./FilterHouses";
import FilterName from "./FilterName";

function Filters({ SearchName, filterName, SearchHouse}) {
    return (
    <form className= 'form'>
            <FilterName SearchName={SearchName} filterName={filterName}/>
            <FilterHouses SearchHouse={SearchHouse} />
    </form>
    );
}

export default Filters;