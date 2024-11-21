import React, { useState } from "react";
import emailjs from 'emailjs-com';

const Contact = () => {
  const [isButtonHover, setIsButtonHover] = useState(false);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: userName,
      message: message,
      email: email,
    }

    emailjs.send("service_hg3qo4b", "template_vx9rava", templateParams, "MDQKYAbDfNnfKI1IO").then((response) => {
      console.log("EMAIL ENVIADO", response.status, response.text)
      setUserName("");
      setMessage("");
      setEmail("");

    }, (err) => {
      console.log(err);
    })
  }

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
        <form style={{ width: "30%" }} onSubmit={handleSubmit}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div className="mb-3">
              <input
                className="input-placeholder"
                type="text"
                id="nomeCompleto"
                placeholder="Nome Completo"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
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
                className="input-placeholder"
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              <textarea
                type="textarea"
                rows={3}
                id="mensagem"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Mensagem"
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
        <p><i class="bi bi-envelope-at-fill"></i>  lbypratas@gmail.com</p>
      </div>
    </>
  );
};

export default Contact;
