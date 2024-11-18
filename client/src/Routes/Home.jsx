import React from "react";
import DiscountOff from "../assets/discount-off.jpg";

const Home = () => {
  return (
    <div>
      <img src={DiscountOff} className="d-block w-100" />
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
          <div
            style={{
              maxWidth: "200px",
              display: "flex",
              flexDirection: "column",
            }}
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
          <div
            style={{
              maxWidth: "200px",
              display: "flex",
              flexDirection: "column",
            }}
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
          <div
            style={{
              maxWidth: "200px",
              display: "flex",
              flexDirection: "column",
            }}
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
        </div>
      </div>
    </div>
  );
};

export default Home;
