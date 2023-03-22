import '../../styles/Form.scss';

function FilterHouses({ SearchHouse }) {
    const handleInputHouse = (ev) => {
        const value = ev.target.value;
        SearchHouse(value);
    }
  return (
    <>
      <label className="label" htmlFor="house">
        Buscar por casa
      </label>
      <select
        className="select"
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
