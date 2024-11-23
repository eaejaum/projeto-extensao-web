import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { CODIGO_ITEM: productId } = useParams();
  const [isButtonHover, setIsButtonHover] = useState(false);
  const [item, setItem] = useState(null); // Inicializa como null

  useEffect(() => {
    if (productId) {
      fetch(`http://localhost:3001/estoque/${productId}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Falha ao buscar o produto");
          }
          return response.json();
        })
        .then((data) => setItem(data))
        .catch((error) => {
          console.error("Erro ao buscar os detalhes do produto:", error);
          setItem(null); // Para exibir um fallback em caso de erro
        });
    }
  }, [productId]);

  const buyAtWhatsapp = () => {
    if (item) {
      const phoneNumber = "+556132998504";
      const message = encodeURIComponent(
        `Olá gostaria de mais informações sobre o produto, ${item.NOME}!`
      );
      const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
      window.open(whatsappURL, "_blank");
    }
  };

  if (!item) {
    return <p>Carregando detalhes do produto ou o produto não foi encontrado...</p>;
  }

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
          width: "fit-content",
          height: "480px",
          border: "1px solid black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          padding: "5px"
        }}
      >
        {item.FOTO ? (
          <img
            src={item.FOTO}
            alt={`Foto do produto ${item.NOME}`}
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        ) : (
          <span>Sem imagem disponível</span>
        )}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "40%",
        }}
      >
        <span style={{ fontSize: "1.7rem" }}>{item.NOME}</span>
        <span
          style={{
            fontWeight: "bold",
            color: "#BFA78A",
            fontSize: "1.4rem",
          }}
        >
          {Number(item.VALOR).toLocaleString("pt-BR", {
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
          {(Number(item.VALOR) * (1 - 10 / 100)).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}{" "}
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
          {Number(item.VALOR / 12).toLocaleString("pt-BR", {
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
          onClick={buyAtWhatsapp}
        >
          COMPRAR
        </button>
        <div style={{ marginTop: "3rem" }}>
          <p>
            ✨ {item.NOME}: O Acessório Essencial para Brilhar! ✨
            Transforme seu visual utilizando {item.NOME}. Este elegante
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
            🛒 Compra Segura e Rápida: Adquira seu item {item.NOME} com
            total segurança! Clique em comprar e entre em uma conversa com
            nossa equipe pelo Whatsapp, iremos garantir que tenha uma
            experiência de compra tranquila e satisfatória.
          </p>
          <p>
            🌟 Não perca essa oportunidade! Garanta já o item {item.NOME}{" "}
            e eleve seu estilo a um novo patamar de elegância e
            sofisticação! ✨
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
