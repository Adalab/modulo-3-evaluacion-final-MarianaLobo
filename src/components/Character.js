import imgDefault from '../images/imgDefault.png';

function Character({ oneCharacter }) {
    return (
        <li className='character-card' key= {oneCharacter.id} >
        <h3 className='character-name'>{oneCharacter.name}</h3>
            <img className='character-img' src={oneCharacter.image ? oneCharacter.image : imgDefault } alt='imagen'></img>
            <p className='character-species'>{oneCharacter.species}</p>
    </li> 

    );
}

export default Character;