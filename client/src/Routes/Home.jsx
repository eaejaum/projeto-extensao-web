import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

// Importando imagens diretamente
import discountOff from "../assets/discount-off.jpg";
import bf from "../assets/bf.jpg";
import rosa from "../assets/ROSA.jpg";
import rosao from "../assets/ROSAO.jpg";
import rosinha from "../assets/ROSINHA.jpg";

// Array de imagens importadas
const imagens = [discountOff, bf, rosa, rosao, rosinha];

const Home = () => {
  const navigate = useNavigate();
  const [itens, setItens] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/estoque")
      .then((response) => response.json())
      .then((data) => setItens(data));
  }, []);

  return (
    <div>
      <Carousel>
        {imagens.map((imagem, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={imagem}
              alt={`Slide ${index + 1}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <div style={{ padding: "2rem 5rem", background: "#FAFAFA" }}>
        <h6 style={{ fontWeight: "bold" }}>PRODUTOS EM DESTAQUE</h6>
        <hr />
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "3rem",
          }}
        >
          {itens.map((produto) => (
            <div
              key={produto.CODIGO_ITEM}
              style={{
                maxWidth: "200px",
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
              }}
              onClick={() => navigate(`/productDetails/${produto.CODIGO_ITEM}`)}
            >
              <div
                style={{
                  width: "216px",
                  height: "216px",
                  border: "1px solid black",
                }}
              ></div>
              <span style={{ fontSize: ".9rem", padding: ".3rem 0" }}>
                {produto.NOME}
              </span>
              <span
                style={{
                  fontWeight: "bold",
                  color: "#BFA78A",
                  fontSize: "0.9rem",
                }}
              >
                {Number(produto.VALOR).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL"
                })}
              </span>
              <span style={{ fontWeight: "bold", fontSize: "0.9rem" }}>
                {(Number(produto.VALOR) * (1 - 10 / 100)).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL"
                })} com Pix
              </span>
              <span
                style={{
                  fontWeight: "bold",
                  fontSize: "0.9rem",
                  color: "#EDD6B2",
                  padding: ".3rem 0",
                }}
              >
                12x de {Number(produto.VALOR / 12).toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL"
                })}
              </span>
              <span style={{ fontSize: "0.8rem" }}>Em estoque: {produto.QUANTIDADE}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
