import React, { useContext, useEffect, useState } from "react";
import { HandleSearchContext } from "../context/HandleSearchContext";

const EditProductModal = ({ isOpen, setIsOpen, product }) => {
  const { products, setProducts } = useContext(HandleSearchContext);
  const [form, setForm] = useState({
    nome: product?.NOME || "",
    valor: product?.VALOR || "",
    quantidade: product?.QUANTIDADE || "",
  });

  useEffect(() => {
    if (product) {
      setForm({
        nome: product.NOME,
        valor: product.VALOR,
        quantidade: product.QUANTIDADE,
      });
    }
  }, [product]);

  const handleUpdate = (id, form) => {
    fetch(`https://serverlby.vercel.app/estoque/editar/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
    .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao atualizar item");
        }
        return response.json();
      })
      .then(() => {
        // Fazer uma requisição GET para recarregar todos os produtos
        fetch("https://serverlby.vercel.app/estoque")
          .then((response) => response.json())
          .then((updatedProducts) => {
            setProducts(updatedProducts); // Atualizar o estado com os produtos mais recentes
            setIsOpen(false); // Fechar o modal
          });
      })
      .catch((err) => console.error("Erro ao editar produto:", err));
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "white",
        borderRadius: "8px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        zIndex: 1000,
        width: "400px",
        maxWidth: "90%",
      }}
    >
      <div
        className="modal-dialog"
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "20px",
        }}
      >
        <div
          className="modal-content"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <div
            className="modal-header"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: "1px solid #ddd",
              paddingBottom: "10px",
            }}
          >
            <h5
              className="modal-title"
              style={{
                margin: 0,
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              Editar Produto
            </h5>
            <button
              type="button"
              className="btn-close"
              onClick={() => setIsOpen(false)}
              style={{
                background: "none",
                border: "none",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              &times;
            </button>
          </div>
          <div className="modal-body">
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "14px",
                    marginBottom: "5px",
                    color: "#333",
                  }}
                >
                  Nome:
                </label>
                <input
                  type="text"
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "8px",
                    fontSize: "14px",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                    outline: "none",
                  }}
                />
              </div>
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "14px",
                    marginBottom: "5px",
                    color: "#333",
                  }}
                >
                  Valor:
                </label>
                <input
                  type="number"
                  value={form.valor}
                  onChange={(e) => setForm({ ...form, valor: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "8px",
                    fontSize: "14px",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                    outline: "none",
                  }}
                />
              </div>
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "14px",
                    marginBottom: "5px",
                    color: "#333",
                  }}
                >
                  Quantidade:
                </label>
                <input
                  type="number"
                  value={form.quantidade}
                  onChange={(e) =>
                    setForm({ ...form, quantidade: e.target.value })
                  }
                  style={{
                    width: "100%",
                    padding: "8px",
                    fontSize: "14px",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                    outline: "none",
                  }}
                />
              </div>
            </div>
          </div>
          <div
            className="modal-footer"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "10px",
              paddingTop: "10px",
              borderTop: "1px solid #ddd",
            }}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              style={{
                padding: "8px 12px",
                backgroundColor: "#ccc",
                border: "none",
                borderRadius: "4px",
                fontSize: "14px",
                cursor: "pointer",
                color: "#fff",
              }}
            >
              Cancelar
            </button>
            <button
              type="button"
              onClick={() => handleUpdate(product.CODIGO_ITEM, form)}
              style={{
                padding: "8px 12px",
                backgroundColor: "#A2907A",
                border: "none",
                borderRadius: "4px",
                fontSize: "14px",
                cursor: "pointer",
                color: "#fff",
              }}
            >
              Salvar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProductModal;
