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
  const [filterHouse, setFilterHouse] = useState('Gryffindor')

  /* EFECTOS (código cuando carga la página) */
  useEffect(() => {
    getCharacters(filterHouse).then((getData) => {
      setCharacters(getData);
   })
  }, [filterHouse]);

  /* FUNCIONES HANDLER */
  const SearchName = (value) => {
    setFilterName(value);
  };

  const SearchHouse = (value) => {
    setFilterHouse(value)
  };

  /* FUNCIONES Y VARIABLES AUXILIARES PARA PINTAR EL HTML */
  const filterCharacter = () => {
    return characters
      .filter((oneCharacter) => oneCharacter.name.toLocaleLowerCase().includes(filterName.toLocaleLowerCase()))
      .filter((oneCharacter) => {
        return filterHouse === 'Gryffindor' ? true : oneCharacter.house === filterHouse;
      })
  };

  /* HTML */
  return <div className="App">
    <Header />
    <main>
      <Filters SearchName={SearchName} filterName={filterName} SearchHouse={SearchHouse} />
      <CharacterList filterCharacter={filterCharacter()} />
    </main>
  </div>;
}

/* PROP-TYPES */

/* EXPORT DEL COMPONENTE */
export default App;
