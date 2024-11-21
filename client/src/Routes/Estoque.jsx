import React, { useState, useEffect } from "react";

const Estoque = () => {
  const [itens, setItens] = useState([]); // Estado para armazenar os itens
  const [form, setForm] = useState({
    nome: "",
    valor: "",
    quantidade: "",
  }); // Estado para o formulário de cadastro

  // Função para buscar os itens
  useEffect(() => {
    fetch("http://localhost:3001/estoque")
      .then((response) => response.json())
      .then((data) => setItens(data))
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
        setItens((prevItens) => [...prevItens, newItem]); // Atualiza a lista com o novo item
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
        setItens((prevItens) => prevItens.filter((item) => item.CODIGO_ITEM !== id)); // Remove o item deletado da lista
      })
      .catch((err) => console.error("Erro ao deletar item:", err));
  };

  return (
    <div>
      <h1>Gerenciamento de Estoque</h1>

      {/* Formulário para cadastrar novos itens */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={form.nome}
            onChange={(e) => setForm({ ...form, nome: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Valor:</label>
          <input
            type="number"
            step="0.01"
            value={form.valor}
            onChange={(e) => setForm({ ...form, valor: e.target.value })}
            required
          />
        </div>
        <div>
          <label>Quantidade:</label>
          <input
            type="number"
            value={form.quantidade}
            onChange={(e) => setForm({ ...form, quantidade: e.target.value })}
            required
          />
        </div>
        <button type="submit">Cadastrar Produto</button>
      </form>

      {/* Tabela para exibir os itens */}
      <h2>Lista de Itens</h2>
      <table border="1">
        <thead>
          <tr>
            <th>Código</th>
            <th>Nome</th>
            <th>Valor</th>
            <th>Quantidade</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {itens.map((item) => (
            <tr key={item.CODIGO_ITEM}>
              <td>{item.CODIGO_ITEM}</td>
              <td>{item.NOME}</td>
              <td>{item.VALOR}</td>
              <td>{item.QUANTIDADE}</td>
              <td>
                <button onClick={() => handleDelete(item.CODIGO_ITEM)}>Deletar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Estoque;
