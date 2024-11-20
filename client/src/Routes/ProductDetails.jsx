import React, { useState } from "react";

const ProductDetails = () => {
  const [isButtonHover, setIsButtonHover] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "5rem",
        margin: "5rem",
      }}
    >
      <div
        style={{
          width: "480px",
          height: "480px",
          border: "1px solid black",
        }}
      ></div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "40%",
        }}
      >
        <span style={{ fontSize: "1.7rem" }}>Pulseira em aço elástico</span>
        <span
          style={{
            fontWeight: "bold",
            color: "#BFA78A",
            fontSize: "1.4rem",
          }}
        >
          R$356,50
        </span>
        <span
          style={{
            fontWeight: "bold",
            fontSize: "1.1rem",
            color: "#EDD6B2",
            paddingBottom: "1rem",
          }}
        >
          R$320,85 com Pix
        </span>
        <span
          style={{
            fontWeight: "bold",
            fontSize: "0.9rem",
            color: "#EDD6B2",
            padding: ".3rem 0",
          }}
        >
          12x de R$34,47
        </span>
        <hr />
        <button
          style={{
            border: isButtonHover ? "3px solid #D6C8B6" : "3px solid #BFA78A",
            color: isButtonHover ? "#FFF" : "#BFA78A",
            fontWeight: "500",
            fontSize: ".9rem",
            padding: ".6rem .9rem",
            outline: "none",
            background: isButtonHover ? "#D6C8B6" : "transparent",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={() => setIsButtonHover(true)}
          onMouseLeave={() => setIsButtonHover(false)}
        >
          INCLUIR NO CARRINHO
        </button>
        <div style={{ marginTop: "3rem" }}>
          <p>
            ✨ Pulseira em Aço Elástico para Berloque Inspiração Pandora: O
            Acessório Essencial para Brilhar! ✨ Transforme seu visual com a
            nossa Pulseira em Aço Elástico para Berloque. Este elegante
            acessório é perfeito para quem deseja expressar sua personalidade e
            estilo de forma única.
          </p>
          <p>
            💎 Material de Alta Qualidade: Fabricada em aço inoxidável, a
            Pulseira em Aço Elástico garante durabilidade e resistência,
            perfeita tanto para o uso diário quanto para ocasiões especiais. Seu
            acabamento polido traz um brilho irresistível que complementará
            qualquer look.
          </p>
          <p>
            🌟 Versatilidade em Cada Ocasião: Use a pulseira sozinha para um
            visual mais discreto ou adicione berloques para um toque
            personalizado. Ela se adapta facilmente a diferentes estilos, do
            casual ao sofisticado, tornando-se um item indispensável na sua
            coleção de acessórios.
          </p>
          <p>
            🛒 Compra Segura e Rápida: Adquira sua Pulseira em Aço Elástico para
            Berloque com total segurança! Oferecemos envio rápido e opções de
            pagamento seguras, garantindo uma experiência de compra tranquila e
            satisfatória.
          </p>
          <p>
            🌟 Não perca essa oportunidade! Garanta já a sua Pulseira em Aço
            Elástico e eleve seu estilo a um novo patamar de elegância e
            sofisticação! ✨
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
