import Character from "./Character";
import '../styles/CharacterList.scss';

function CharacterList({ filterCharacter, msgError }) {

    const renderCharacter = filterCharacter.map((oneCharacter) => {
      return <Character oneCharacter={oneCharacter} key={oneCharacter.id} />;
      
    });
  return <ul className="characterList">{renderCharacter} {msgError}</ul>;
}

export default CharacterList;
