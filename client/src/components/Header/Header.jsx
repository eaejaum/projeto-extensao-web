import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className="navbar" style={{ background: "#FAFAFA", padding: '2rem' }}>
            <div className="container-fluid">
                <span className="navbar-brand mb-0 h1">L&BY Pratas</span>
                <div className="navegacao">
                    <Link to="/">Início</Link>
                    <Link to="/contact">Contato</Link>
                    <Link to="/shoppingcart">Carrinho</Link>
                    <Link to="/newsletter">Newsletter</Link>
                </div>
            </div>
        </nav>
    )
}

export default Header