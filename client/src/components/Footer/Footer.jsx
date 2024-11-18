import React from 'react';

const Footer = () => {
    return (
        <div 
            className="bg-body-tertiary" 
            style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center',
                padding: '.7rem' 
            }}
        >
            <span>Copyright L & BY Pratas - 2024. Todos os direitos reservados.</span>
        </div>
    );
};

export default Footer