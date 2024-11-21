import React, { useState, useEffect } from "react";

const Estoque = () => {
  const [itens, setItens] = useState([]); // Estado para armazenar os itens
  const [formData, setFormData] = useState({
    nome: "",
    valor: "",
    quantidade: "",
  }); // Estado para o formulário

  // Fetch inicial para carregar os itens
  useEffect(() => {
    fetch("http://localhost:3001/estoque")
      .then((response) => response.json())
      .then((data) => {
        setItens(data);
        console.log(data);
      });
  }, []);

  // Função para lidar com mudanças no formulário
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Função para enviar o formulário
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3001/estoque", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome: formData.nome,
        valor: parseFloat(formData.valor),
        quantidade: parseInt(formData.quantidade, 10),
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao cadastrar item");
        }
        return response.json();
      })
      .then((newItem) => {
        // Atualizar a lista de itens com o novo item
        setItens((prevItens) => [...prevItens, newItem]);
        // Resetar o formulário
        setFormData({ nome: "", valor: "", quantidade: "" });
        alert("Produto cadastrado com sucesso!");
      })
      .catch((error) => {
        console.error("Erro ao cadastrar produto:", error);
        alert("Ocorreu um erro ao cadastrar o produto.");
      });
  };

  return (
    <div>
      <h1>Lista de Itens</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Código</th>
            <th>Nome</th>
            <th>Valor</th>
            <th>Quantidade</th>
          </tr>
        </thead>
        <tbody>
          {itens.map((item) => (
            <tr key={item.CODIGO_ITEM}>
              <td>{item.CODIGO_ITEM}</td>
              <td>{item.NOME}</td>
              <td>{item.VALOR}</td>
              <td>{item.QUANTIDADE}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Cadastrar Novo Produto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Nome:
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Valor:
            <input
              type="number"
              name="valor"
              step="0.01"
              value={formData.valor}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Quantidade:
            <input
              type="number"
              name="quantidade"
              value={formData.quantidade}
              onChange={handleInputChange}
              required
            />
          </label>
        </div>
        <button type="submit">Cadastrar Produto</button>
      </form>
    </div>
  );
};

export default Estoque;