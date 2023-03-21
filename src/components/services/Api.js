const getCharacters = () => {
    return fetch('https://hp-api.onrender.com/api/characters/house/gryffindor')
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
                };
                
            });
            return getData;
        });
};
export default getCharacters();