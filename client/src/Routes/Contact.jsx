import React from "react";

const Contact = () => {
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
                className="form-control"
                id="nomeCompleto"
                placeholder="Nome Completo"
                style={{
                  background: "transparent",
                  border: "2px solid #FFF",
                  color: "#FFF",
                }}
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                style={{
                  background: "transparent",
                  border: "2px solid #FFF",
                  color: "#FFF",
                }}
              />
            </div>
            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                id="telefone"
                placeholder="Telefone (Opcional)"
                style={{
                  background: "transparent",
                  border: "2px solid #FFF",
                  color: "#FFF",
                }}
              />
            </div>
            <div className="mb-3">
              <textarea
                type="textarea"
                rows={3}
                className="form-control"
                id="mensagem"
                placeholder="Mensagem (Opcional)"
                style={{
                  background: "transparent",
                  border: "2px solid #FFF",
                  color: "#FFF",
                }}
              />
            </div>
            <button
              type="submit"
              className="btn btn-success"
              style={{ padding: ".3rem 2rem", alignSelf: "end" }}
            >
              Enviar
            </button>
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
