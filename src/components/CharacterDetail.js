import imgDefault from '../images/imgDefault.png';

function CharacterDetail({characterFind}) {
    return (
        <>
              <h3 className='character-name'>{characterFind.name}</h3>
            <img className='character-img' src={characterFind.image ? characterFind.image : imgDefault } alt='imagen'></img>
            <p className='character-species'>{characterFind.species}</p>
        </>
    );
}

export default CharacterDetail;