import Character from "./Character";
import "../styles/CharacterList.scss";
import PropTypes from 'prop-types';

function CharacterList({ filterCharacter, msgError }) {
  const renderCharacter = filterCharacter.map((oneCharacter) => {
    return <Character oneCharacter={oneCharacter} key={oneCharacter.id} />;
  });
  return (
    <ul className="characterList">
      {renderCharacter} {msgError}
    </ul>
  );
};

CharacterList.propTypes = {
  msgError: PropTypes.object,
  filterCharacter: PropTypes.array,
};

export default CharacterList;
