import imgDefault from "../images/imgDefault.png";
import grif from "../images/grif.png";
import sli from "../images/sli.png";
import huf from "../images/huf.png";
import rav from "../images/rav.png";
import dead from "../images/dead.svg";
import alive from "../images/alive.svg";
import "../styles/CharacterDetail.scss";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function CharacterDetail({ characterFind }) {
  //Función para seleccionar la imagen según la casa
  const houseImg = () => {
    if (characterFind.house === "Gryffindor") {
      return <img className="house-img" src={grif} alt="" />;
    } else if (characterFind.house === "Slytherin") {
      return <img className="house-img" src={sli} alt="" />;
    } else if (characterFind.house === "Hufflepuff") {
      return <img className="house-img" src={huf} alt="" />;
    } else {
      return <img className="house-img" src={rav} alt="" />;
    }
  };

  return (
    <section className="container-details">
      <div className="character-detail">
        <img
          className="img-detail"
          src={characterFind.image ? characterFind.image : imgDefault}
          alt="imagen"
        ></img>
        <div className="info-detail">
          <p className="text-detail">Nombre: {characterFind.name}</p>
          <p className="text-detail"> Especie: {characterFind.species} </p>
          <p className="text-detail">casa: {characterFind.house}</p>
          {characterFind.alive === true ? (
            <div className="status">
              <p className="text-detail">Estado: Alive</p>
              <img
                className="icon-alive"
                src={alive}
                alt="corazón con latido"
              ></img>
            </div>
          ) : (
            <div className="status">
              <p className="text-detail">Estado: Dead</p>
              <img className="icon-alive" src={dead} alt="calavera"></img>
            </div>
          )}
          <p className="text-detail">Género: {characterFind.gender}</p>
          <p className="text-detail">
            Nombre alternativo: {characterFind.altName}
          </p>
        </div>
        {houseImg()};
        <Link className="return" to="/">
          Volver
        </Link>
      </div>
    </section>
  );
};

CharacterDetail.propTypes = {
  name: PropTypes.string,
  species: PropTypes.string,
  house: PropTypes.string,
  image: PropTypes.string,
  alive: PropTypes.bool,
  altName: PropTypes.string,
  gender: PropTypes.string,
};

export default CharacterDetail;
