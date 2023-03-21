import Character from "./Character";

function CharacterList({ filterCharacterName}) {

    const renderCharacter = filterCharacterName.map((oneCharacter) => {
        return <Character oneCharacter={oneCharacter} key={oneCharacter.id} />;
    });
  return <ul className="characterList">{renderCharacter}</ul>;
}

export default CharacterList;
