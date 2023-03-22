import imgDefault from "../images/imgDefault.png";
import grif from "../images/grif.png";
import sli from "../images/sli.png";
import huf from "../images/huf.png";
import rav from "../images/rav.png";
import "../styles/CharacterDetail.scss";
import { Link } from 'react-router-dom';

function CharacterDetail({ characterFind }) {
    
    const houseImg = () => {
    if (characterFind.house === "Gryffindor") {
        return <img className= 'house-img' src={grif} alt="" />
    } else if (characterFind.house === "Slytherin") {
        return <img className= 'house-img' src={sli} alt="" />
    } else if (characterFind.house === "Hufflepuff") {
        return <img className= 'house-img' src={huf} alt="" />
    } else {
        return <img className= 'house-img' src={rav} alt="" />
    }
  };
  

  
  return (
    <div className="character-detail">
      <img
        className="character-img"
        src={characterFind.image ? characterFind.image : imgDefault}
        alt="imagen"
      ></img>
      <div className="info-detail">
        <p className="text-detail">Nombre: {characterFind.name}</p>
        <p className="text-detail"> Especie: {characterFind.species} </p>
        <p className="text-detail">casa: {characterFind.house}</p>{characterFind.alive === true ? <p className="text-detail">Estado: Alive</p> : <p className="text-detail">Estado: Dead</p>}
        <p className="text-detail">Género: {characterFind.gender}</p>
        <p className="text-detail">Nombre alternativo: {characterFind.altName}</p>
      </div>
          {houseImg()};
          <Link className='return' to="/">Volver</Link>
    </div>
  );
}

export default CharacterDetail;
