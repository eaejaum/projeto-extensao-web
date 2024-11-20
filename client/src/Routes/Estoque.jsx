import React, { useState, useEffect } from 'react';

const Estoque = () => {
  const [itens, setItens] = useState([]); // Estado para armazenar os itens

  useEffect(() => {
    fetch('http://localhost:3001/estoque', {
      mode: 'no-cors',
})  
      .then((response) => {
        if (!response.ok) {
          throw new Error('Falha na requisição');
        }
        return response.json();  // Converte a resposta para JSON
      })
      .then((data) => {
        setItens(data);  // Armazena os dados recebidos no estado
        console.log(data);
      })
      .catch((error) => {
      });
  }, []);  // O array vazio [] significa que isso vai rodar apenas uma vez, quando o componente for montado

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
          {itens.map(item => (
            <tr key={item.CODIGO_ITEM}>
              <td>{item.CODIGO_ITEM}</td>
              <td>{item.NOME}</td>
              <td>{item.VALOR.toFixed(2)}</td>
              <td>{item.QUANTIDADE}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Estoque;