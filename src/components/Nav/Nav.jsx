import "./Nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <Link className="nav-menu__item" to="/random">
        Home - Guessing Game
      </Link>

      <Link className="nav-menu__item" to="/quotes">
        All Quotes
      </Link>
    </div>
  )
}

export default Nav