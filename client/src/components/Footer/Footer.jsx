import React from "react";

const Footer = () => {
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
            border: "3px solid #BFA78A",
            borderRadius: "100%",
            width: "4.5rem",
            height: "4.5rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <i class="bi bi-instagram fs-1" style={{ color: "#BFA78A" }}></i>
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
