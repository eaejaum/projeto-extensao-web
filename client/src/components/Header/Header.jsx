import "./Header.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/main-logo.png";
import { HandleSearchContext } from "../../context/HandleSearchContext";
import { useContext } from "react";

const Header = ({ scrollToProducts }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { searchTerm, handleSearchTerm } = useContext(HandleSearchContext);

  const isHomePage = location.pathname === "/";

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      scrollToProducts();
    }
  };

  return (
    <nav className="navbar" style={{ background: "#FAFAFA", padding: "2rem" }}>
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">
          <img
            src={logo}
            width={200}
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          />
        </span>
        {isHomePage && (
          <div
            style={{
              width: "30%",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <input
              className="bi bi-search"
              type="text"
              value={searchTerm}
              onChange={handleSearchTerm}
              onKeyDown={handleKeyDown}
              placeholder="O que você está procurando?"
              style={{
                background: "transparent",
                width: "92%",
                border: "3px solid #BFA78A",
                padding: ".3rem",
                fontSize: ".9rem",
                outline: "none",
                fontStyle: "italic",
              }}
            />
            <i
              className="bi bi-search"
              style={{ width: "8%", color: "#BFA78A", textAlign: "center" }}
            ></i>
          </div>
        )}
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
        </div>
      </div>
    </nav>
  );
};

export default Header;
