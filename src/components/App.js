/* SECCIÓN DE IMPORT */

// - De React
import { useEffect, useState } from "react";
// - Nuestros
import CharacterList from './CharacterList';
import Filters from './form/Filters';
import Header from './Header';
import getCharacters from './services/Api';
// - Sass
import '../styles/App.scss';

// - Imágenes

/* SECCIÓN DEL COMPONENTE */
function App() {
  /* VARIABLES ESTADO (DATOS) */
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState('');

  /* EFECTOS (código cuando carga la página) */
  useEffect(() => {
    getCharacters.then((getData) => {
      setCharacters(getData);
   })
  }, []);

  /* FUNCIONES HANDLER */
  const SearchName = (value) => {
    setFilterName(value);


  }

  /* FUNCIONES Y VARIABLES AUXILIARES PARA PINTAR EL HTML */
  const filterCharacterName = () => {
    return characters.filter((oneCharacter) => oneCharacter.name.toLocaleLowerCase().includes(filterName.toLocaleLowerCase()))
} 

  /* HTML */
  return <div className="App">
    <Header />
    <main>
      <Filters SearchName={SearchName} filterName={filterName} />
      <CharacterList filterCharacterName={filterCharacterName()} />
    </main>
  </div>;
}

/* PROP-TYPES */

/* EXPORT DEL COMPONENTE */
export default App;
