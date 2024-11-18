import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar" style={{ background: "#FAFAFA", padding: "2rem" }}>
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">L&BY Pratas</span>
        <div className="navegacao">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "ativo" : "")}
          >
            Início
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "ativo" : "")}
          >
            Contato
          </NavLink>
          <NavLink
            to="/shoppingcart"
            className={({ isActive }) => (isActive ? "ativo" : "")}
          >
            Carrinho
          </NavLink>
          <NavLink
            to="/newsletter"
            className={({ isActive }) => (isActive ? "ativo" : "")}
          >
            Newsletter
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
