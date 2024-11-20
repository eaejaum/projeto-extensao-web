import React, { useEffect } from "react";
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

  useEffect(() => {});

  return (
    <div>
      {/* Carrossel corrigido */}
      <Carousel>
        {imagens.map((imagem, index) => (
          <Carousel.Item key={index}>
            {/* Adicionada classe padrão do Bootstrap */}
            <img
              className="d-block w-100"
              src={imagem}
              alt={`Slide ${index + 1}`}
            />
            {/* Descriçao carrossel comentada */}
            {/* <Carousel.Caption>
              <h3>Slide {index + 1}</h3>
              <p>
                Texto descritivo para o slide {index + 1}. Edite conforme a
                necessidade.
              </p>
            </Carousel.Caption> */}
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Produtos em destaque */}
      <div style={{ padding: "2rem 5rem", background: "#FAFAFA" }}>
        <h6 style={{ fontWeight: "bold" }}>PRODUTOS EM DESTAQUE</h6>
        <hr />
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flexWrap: "wrap",
            gap: "4rem",
          }}
        >
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              style={{
                maxWidth: "200px",
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
              }}
              onClick={() => navigate(`/productDetails/${1}`)}
            >
              <div
                style={{
                  width: "216px",
                  height: "216px",
                  border: "1px solid black",
                }}
              ></div>
              <span style={{ fontSize: ".9rem", padding: ".3rem 0" }}>
                Pulseira em aço elástico
              </span>
              <span
                style={{
                  fontWeight: "bold",
                  color: "#BFA78A",
                  fontSize: "0.9rem",
                }}
              >
                R$356,50
              </span>
              <span style={{ fontWeight: "bold", fontSize: "0.9rem" }}>
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
              <span style={{ fontSize: "0.8rem" }}>PULSEIRAS</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
