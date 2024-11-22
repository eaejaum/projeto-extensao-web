import React, { useState, useEffect, useContext } from "react";
import { HandleSearchContext } from "../context/HandleSearchContext";

const Estoque = () => {
  const [isButtonHover, setIsButtonHover] = useState(false);
  const { products, setProducts } = useContext(HandleSearchContext)
  const [form, setForm] = useState({
    nome: "",
    valor: "",
    quantidade: "",
  }); // Estado para o formulário de cadastro

  // Função para buscar os itens
  useEffect(() => {
    fetch("http://localhost:3001/estoque")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Erro ao buscar itens:", err));
  }, []);

  // Função para cadastrar um novo item
  const handleSubmit = (event) => {
    event.preventDefault();

    fetch("http://localhost:3001/estoque", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome: form.nome,
        valor: parseFloat(form.valor),
        quantidade: parseInt(form.quantidade),
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao cadastrar produto");
        }
        return response.json();
      })
      .then((newItem) => {
        setProducts((prevProducts) => [...prevProducts, newItem]); // Atualiza a lista com o novo item
        setForm({ nome: "", valor: "", quantidade: "" }); // Limpa o formulário
      })
      .catch((err) => console.error("Erro ao cadastrar produto:", err));
  };

  // Função para deletar um item
  const handleDelete = (id) => {
    fetch(`http://localhost:3001/estoque/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao deletar item");
        }
        return response.json();
      })
      .then(() => {
        setProducts((prevProducts) =>
          prevProducts.filter((item) => item.CODIGO_ITEM !== id)
        ); // Remove o item deletado da lista
      })
      .catch((err) => console.error("Erro ao deletar item:", err));
  };

  const handleUpdate = (id, updatedData) => {
    fetch(`http://localhost:3001/estoque/editar/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao atualizar item");
        }
        return response.json();
      })
      .then((updatedItem) => {
        setProducts((prevProducts) =>
          prevProducts.map((item) =>
            item.CODIGO_ITEM === id ? { ...item, ...updatedItem } : item
          )
        );
      })
      .catch((err) => console.error("Erro ao atualizar item:", err));
  };


  return (
    <div>
      <div style={{ padding: "1rem 3rem", background: "#FAFAFA" }}>
        <div
          className="card text-center mb-3"
          style={{ width: "100%", color: "#fff", background: "#A2907A" }}
        >
          <form onSubmit={handleSubmit}>
            <div className="card-body">
              <h3 className="card-title">Cadastro de Produto</h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    paddingBottom: ".5rem",
                  }}
                >
                  <input
                    className="input-placeholder"
                    type="text"
                    value={form.nome}
                    onChange={(e) => setForm({ ...form, nome: e.target.value })}
                    placeholder="Nome"
                    style={{
                      background: "transparent",
                      width: "50%",
                      border: "2px solid #FFF",
                      outline: "none",
                      padding: ".5rem",
                      color: "#FFF",
                    }}
                    required
                  />
                </div>
                <div
                  style={{
                    paddingBottom: ".5rem",
                  }}
                >
                  <input
                    className="input-placeholder"
                    type="number"
                    step="0.01"
                    value={form.valor}
                    onChange={(e) =>
                      setForm({ ...form, valor: e.target.value })
                    }
                    placeholder="Valor"
                    style={{
                      background: "transparent",
                      width: "50%",
                      border: "2px solid #FFF",
                      outline: "none",
                      padding: ".5rem",
                      color: "#FFF",
                    }}
                    required
                  />
                </div>
                <div
                  style={{
                    paddingBottom: ".5rem",
                  }}
                >
                  <input
                    className="input-placeholder"
                    type="number"
                    value={form.quantidade}
                    onChange={(e) =>
                      setForm({ ...form, quantidade: e.target.value })
                    }
                    placeholder="Quantidade"
                    style={{
                      background: "transparent",
                      width: "50%",
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
                    style={{
                      border: isButtonHover
                        ? "3px solid #D6C8B6"
                        : "3px solid #BFA78A",
                      color: isButtonHover ? "#FFF" : "#FFF",
                      fontWeight: "500",
                      fontSize: ".9rem",
                      padding: ".6rem .9rem",
                      outline: "none",
                      background: isButtonHover ? "#D6C8B6" : "transparent",
                      transition: "all 0.3s ease",
                    }}
                    type="submit"
                    onMouseEnter={() => setIsButtonHover(true)}
                    onMouseLeave={() => setIsButtonHover(false)}
                  >
                    Cadastrar Produto
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Tabela para exibir os itens */}
        <div style={{ padding: "3rem 0", display: "flex", flexDirection: "column" }}>
          <h2 style={{ alignSelf: "center", paddingBottom: "1rem" }}>Lista de Itens</h2>
          <table
            className="table table-hover"
            style={{ padding: "100px" }}
            border="1"
          >
            <thead>
              <tr>
                <th>Nome</th>
                <th>Valor</th>
                <th>Quantidade</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item) => (
                <tr key={item.CODIGO_ITEM}>
                  <td>{item.NOME}</td>
                  <td>
                    {Number(item.VALOR).toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </td>
                  <td>{item.QUANTIDADE}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(item.CODIGO_ITEM)}
                      className="btn"
                      style={{ border: "none" }}
                    >
                      <i
                        style={{ color: "#D24633" }}
                        className="bi bi-trash3-fill"
                      ></i>
                    </button>
                    <button
                      // onClick={() => handleUpdate(item.CODIGO_ITEM, )}
                      className="btn"
                      style={{ border: "none" }}
                    >
                      <i class="bi bi-pencil-square"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Estoque;
