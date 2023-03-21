function FilterHouses({SearchHouse}) {
    const handleInputHouse = (ev) => {
        const value = ev.target.value;
        SearchHouse(value);
    }
  return (
    <>
      <label className="" htmlFor="house">
        Casa:
      </label>
      <select
        className=""
        name="house"
        id="house"
        onChange={handleInputHouse}
      >
        <option value="Gryffindor">Gryffindor </option>
        <option value="Slytherin">Slytherin</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
      </select>
    </>
  );
}

export default FilterHouses;
