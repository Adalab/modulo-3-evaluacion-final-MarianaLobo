/* SECCIÓN DE IMPORT */

// - De React
import { useEffect, useState } from "react";
import { matchPath, Route, Routes, useLocation} from "react-router-dom";
// - Nuestros
import CharacterList from "./CharacterList";
import Filters from "./form/Filters";
import Header from "./Header";
import getCharacters from "./services/Api";
import CharacterDetail from "./CharacterDetail";
// - Sass
import "../styles/App.scss";

// - Imágenes

/* SECCIÓN DEL COMPONENTE */
function App() {
  /* VARIABLES ESTADO (DATOS) */
  const [characters, setCharacters] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [filterHouse, setFilterHouse] = useState("Gryffindor");

  /* EFECTOS (código cuando carga la página) */
  useEffect(() => {
    getCharacters(filterHouse).then((getData) => {
      setCharacters(getData);
    });
  }, [filterHouse]);

  /* FUNCIONES HANDLER */
  const SearchName = (value) => {
    setFilterName(value);
  };

  const SearchHouse = (value) => {
    setFilterHouse(value);
  };

  /* FUNCIONES Y VARIABLES AUXILIARES PARA PINTAR EL HTML */
 
  const msgError = () => {
    if (filterCharacter.length === 0) {
      return <p className='msg-error'>Ups....parece que el personaje no existe!!!</p>
    }
  };
  const filterCharacter = characters
    .filter((oneCharacter) => {
      return oneCharacter.name
        .toLocaleLowerCase()
       .includes(filterName.toLocaleLowerCase())
    })
      .filter((oneCharacter) => {
        return filterHouse === "Gryffindor"
          ? true
          : oneCharacter.house === filterHouse;
      });

  const { pathname } = useLocation();
  const dataUrl = matchPath('/character/:id', pathname);
  const charactertId = dataUrl !== null ? dataUrl.params.id : null;
  const characterFind = filterCharacter.find(
    (eachCharacter) => eachCharacter.id === charactertId
  );
  /* HTML */
  return (
    <div className="App">
      <Header />
      <main className='main'>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filters
                  SearchName={SearchName}
                  filterName={filterName}
                  SearchHouse={SearchHouse}
                />
                <CharacterList filterCharacter={filterCharacter} msgError={msgError()} />
              </>
            }
          ></Route>
          
          <Route path="/character/:id" element={<CharacterDetail characterFind={characterFind} />} />
        </Routes>
        
      </main>
     
      
    </div>
  );
}

/* PROP-TYPES */

/* EXPORT DEL COMPONENTE */
export default App;
