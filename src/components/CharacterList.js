import Character from "./Character";

function CharacterList({ filterCharacter}) {

    const renderCharacter = filterCharacter.map((oneCharacter) => {
        return <Character oneCharacter={oneCharacter} key={oneCharacter.id} />;
    });
  return <ul className="characterList">{renderCharacter}</ul>;
}

export default CharacterList;
