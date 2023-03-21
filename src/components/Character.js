import imgDefault from "../images/imgDefault.png";
import { Link } from "react-router-dom";

function Character({ oneCharacter }) {
  return (
    <Link to={`/character/${oneCharacter.id}`}>
      <li className="character-card" key={oneCharacter.id}>
        <h3 className="character-name">{oneCharacter.name}</h3>
        <img
          className="character-img"
          src={oneCharacter.image ? oneCharacter.image : imgDefault}
          alt="imagen"
        ></img>
        <p className="character-species">{oneCharacter.species}</p>
      </li>
    </Link>
  );
}

export default Character;
