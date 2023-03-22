import "../styles/Header.scss";
import title from "../images/pngwing.png";

function Header() {
  return (
    <header className="header">
      <img className="header-img" src={title} alt="texto"></img>
    </header>
  );
}

export default Header;
