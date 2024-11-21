import React, { useState } from "react";

const Footer = () => {
  const [instaIsHovered, setInstaIsHovered] = useState(false);

  return (
    <>
      <div
        style={{
          padding: "2rem 0",
          background: "#E4E0DA",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            border: instaIsHovered ? "3px solid #D6C8B6" : "3px solid #BFA78A",
            borderRadius: "100%",
            width: "4.5rem",
            height: "4.5rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            transition: ".3s ease",
          }}
          onMouseEnter={() => setInstaIsHovered(true)}
          onMouseLeave={() => setInstaIsHovered(false)}
        >
          <a href="https://www.instagram.com/lbypratas" target="_blank">
            <i
              class="bi bi-instagram fs-1"
              style={{
                color: instaIsHovered ? "#D6C8B6" : "#BFA78A",
                transition: ".3s ease",
              }}
            ></i>
          </a>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: ".7rem",
          backgroundColor: "#A2907A",
        }}
      >
        <span style={{ color: "#DDDAD6" }}>
          Copyright L & BY Pratas - 2024. Todos os direitos reservados.
        </span>
      </div>
    </>
  );
};

export default Footer;
