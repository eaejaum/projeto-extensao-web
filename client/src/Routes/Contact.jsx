import React, { useState } from "react";

const Contact = () => {
  const [isButtonHover, setIsButtonHover] = useState(false);

  return (
    <>
      <div
        style={{
          background: "#A2907A",
          width: "100vw",
          maxHeight: "100vh",
          padding: "2rem 0",
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <div style={{ width: "30%" }}>
          <h1
            style={{
              color: "#FFF",
            }}
          >
            CONTATO
          </h1>
        </div>
        <form style={{ width: "30%" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className="mb-3">
              <input
                type="text"
                id="nomeCompleto"
                placeholder="Nome Completo"
                style={{
                  background: "transparent",
                  width: "100%",
                  border: "2px solid #FFF",
                  outline: "none",
                  padding: ".5rem",
                  color: "#FFF",
                }}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                id="email"
                placeholder="Email"
                style={{
                  background: "transparent",
                  width: "100%",
                  border: "2px solid #FFF",
                  outline: "none",
                  padding: ".5rem",
                  color: "#FFF",
                }}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                id="telefone"
                placeholder="Telefone (Opcional)"
                style={{
                  background: "transparent",
                  width: "100%",
                  border: "2px solid #FFF",
                  outline: "none",
                  padding: ".5rem",
                  color: "#FFF",
                }}
              />
            </div>
            <div className="mb-3">
              <textarea
                type="textarea"
                rows={3}
                id="mensagem"
                placeholder="Mensagem (Opcional)"
                style={{
                  background: "transparent",
                  width: "100%",
                  border: "2px solid #FFF",
                  outline: "none",
                  padding: ".5rem",
                  color: "#FFF",
                }}
              />
            </div>
            <div>
              <button
                type="submit"
                style={{
                  border: isButtonHover
                    ? "3px solid #D6C8B6"
                    : "3px solid #BFA78A",
                  color: isButtonHover ? "#FFF" : "#FFF",
                  fontWeight: "500",
                  fontSize: ".9rem",
                  padding: ".6rem 1rem",
                  outline: "none",
                  background: isButtonHover ? "#D6C8B6" : "transparent",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={() => setIsButtonHover(true)}
                onMouseLeave={() => setIsButtonHover(false)}
              >
                ENVIAR
              </button>
            </div>
          </div>
        </form>
      </div>
      <div style={{ padding: "2rem 5rem", background: "#FAFAFA" }}>
        <h6 style={{ fontWeight: "bold" }}>DADOS DE CONTATO</h6>
        <hr />
        <p>lbypratas@gmail.com</p>
      </div>
    </>
  );
};

export default Contact;
