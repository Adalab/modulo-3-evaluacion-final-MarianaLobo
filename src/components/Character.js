import imgDefault from "../images/imgDefault.png";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import "../styles/Character.scss";

function Character({ oneCharacter }) {
  return (
    <Link className="link" to={`/character/${oneCharacter.id}`}>
      <li className="character-card" key={oneCharacter.id}>
        <div className="character-info">
          <h3 className="character-name">Nombre: {oneCharacter.name}</h3>
          <p className="character-text">Especie: {oneCharacter.species}</p>
          <p className="character-text">Casa: {oneCharacter.house} </p>
        </div>
        <img
          className="character-img"
          src={oneCharacter.image ? oneCharacter.image : imgDefault}
          alt="imagen"
        ></img>
      </li>
    </Link>
  );
};

Character.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  species: PropTypes.string,
  house: PropTypes.string,
  image: PropTypes.string,
};

export default Character;