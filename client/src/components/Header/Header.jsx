import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container-fluid" style={{ padding: '.6rem' }}>
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