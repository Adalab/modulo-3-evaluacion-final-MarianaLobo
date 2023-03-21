function FilterName({ SearchName, filterName }) {
    const HandleInputname = (ev) => {
        SearchName(ev.target.value)
    }
    return ( 
    <label className='label-name' htmlFor='name'>Nombre del personaje
            <input
                className='input-name'
                placeholder='Ej. Harry Potter'
                onChange={HandleInputname}
                value={filterName}
                type="text"
                name="name"/>
    </label>
    );
}

export default FilterName;
