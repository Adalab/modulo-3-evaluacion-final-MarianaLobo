import imgDefault from '../images/imgDefault.png';

function CharacterDetail({characterFind}) {
    return (
        <>
              <h3 className='character-name'>{characterFind.name}</h3>
            <img className='character-img' src={characterFind.image ? characterFind.image : imgDefault } alt='imagen'></img>
            <p className='character-species'>{characterFind.species}</p>
            <p className='character-house'>{characterFind.house}</p>
            <p className='character-alive'>{characterFind.alive}</p>
            <p className='character-gender'>{characterFind.gender}</p>
            <p className='character-altName'>{characterFind.altName}</p>
            
        </>
    );
}

export default CharacterDetail;