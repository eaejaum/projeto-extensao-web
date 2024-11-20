import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const productId = useParams({});
  const [isButtonHover, setIsButtonHover] = useState(false);
  const [item, setItem] = useState();

  useEffect(() => {
    if (productId) {
      const numberProductId = productId.CODIGO_ITEM;
      fetch(`http://localhost:3001/estoque/${numberProductId}`)
        .then((response) => response.json())
        .then((data) => setItem(data));
    }
  }, [productId]);

  console.log(item);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "5rem",
        margin: "5rem",
      }}
    >
      {item ? (
        <>
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
            <span style={{ fontSize: "1.7rem" }}>{item[0].NOME}</span>
            <span
              style={{
                fontWeight: "bold",
                color: "#BFA78A",
                fontSize: "1.4rem",
              }}
            >
              {Number(item[0].VALOR).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
            <span
              style={{
                fontWeight: "bold",
                fontSize: "1.1rem",
                color: "#EDD6B2",
                paddingBottom: "1rem",
              }}
            >
              {(Number(item[0].VALOR) * (1 - 10 / 100)).toLocaleString(
                "pt-BR",
                {
                  style: "currency",
                  currency: "BRL",
                }
              )}{" "}
              com Pix
            </span>
            <span
              style={{
                fontWeight: "bold",
                fontSize: "0.9rem",
                color: "#EDD6B2",
                padding: ".3rem 0",
              }}
            >
              12x de{" "}
              {Number(item[0].VALOR / 12).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
            <hr />
            <button
              style={{
                border: isButtonHover
                  ? "3px solid #D6C8B6"
                  : "3px solid #BFA78A",
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
                ✨ {item[0].NOME}: O Acessório Essencial para Brilhar! ✨
                Transforme seu visual utilizando {item[0].NOME}. Este elegante
                acessório é perfeito para quem deseja expressar sua
                personalidade e estilo de forma única.
              </p>
              <p>
                💎 Material de Alta Qualidade: Nosso produto garante
                durabilidade e resistência, perfeita tanto para o uso diário
                quanto para ocasiões especiais. Seu acabamento polido traz um
                brilho irresistível que complementará qualquer look.
              </p>
              <p>
                🛒 Compra Segura e Rápida: Adquira seu item {item[0].NOME} com
                total segurança! Clique em comprar e entre em uma conversar com
                nossa equipe pelo Whatsapp, iremos garantir que tenha uma
                experiência de compra tranquila e satisfatória.
              </p>
              <p>
                🌟 Não perca essa oportunidade! Garanta já o item {item[0].NOME}{" "}
                e eleve seu estilo a um novo patamar de elegância e
                sofisticação! ✨
              </p>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ProductDetails;
