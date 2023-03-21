
const getCharacters = (filterHouse) => {
    return fetch(`https://hp-api.onrender.com/api/characters/house/${filterHouse}`)
        .then((response) => response.json())
        .then((data) => {
            const getData = data.map((oneCharacter) => {
                return {
                    name: oneCharacter.name,
                    image: oneCharacter.image,
                    species: oneCharacter.species,
                    house: oneCharacter.house,
                    alive: oneCharacter.alive,
                    id: oneCharacter.id,
                    gender: oneCharacter.id,
                    altName: oneCharacter.alternate_names,
                };
                
            });
            return getData;
        });
};
export default getCharacters;