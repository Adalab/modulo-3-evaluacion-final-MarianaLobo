function FilterName({ SearchName, filterName }) {
    const HandleInputname = (ev) => {
        SearchName(ev.target.value)
    }
    return ( 
        <>
    <label className='label' htmlFor='name'>Buscar por nombre</label>
            <input
                className='input-name'
                placeholder='Ej. Harry Potter'
                onChange={HandleInputname}
                value={filterName}
                type="text"
                name="name"/>
            </>
    );
}

export default FilterName;
