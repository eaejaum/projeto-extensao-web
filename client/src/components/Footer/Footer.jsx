import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="principal bg-body-tertiary">
            <div>
                L & BY Pratas
            </div>
            <div>
                <span>Copyright L & BY Pratas - 2024. Todos os direitos reservados.</span>
            </div>
            <div className="redes-sociais">
                <button type="button" class="btn btn-dark">Instagram</button>
                <button type="button" class="btn btn-dark">Whatsapp</button>
            </div>
        </div>
    );
};

export default Footer