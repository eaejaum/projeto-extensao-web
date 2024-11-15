import './Header.css'

const Header = () => {
    return (
        <nav className="navbar bg-body-tertiary">
            <div className="principal container-fluid">
                <span className="navbar-brand mb-0 h1">LOGO</span>
                <div className="navegacao">
                    <a href="#">Início</a>
                    <a href="#">Produto</a>
                    <a href="#">Contato</a>
                    <a href="#">Carrinho</a>
                    <a href="#">Newsletter</a>
                </div>
            </div>
        </nav>
    )
}

export default Header