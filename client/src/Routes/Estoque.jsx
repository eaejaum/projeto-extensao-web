import React, { useState, useEffect } from "react";

const Estoque = () => {
  const [itens, setItens] = useState([]); // Estado para armazenar os itens

  useEffect(() => {
    fetch("http://localhost:3001/estoque")
      .then((response) => response.json())
      // 4. Setting *dogImage* to the image url that we received from the response above
      .then((data) => setItens(data));
  }, []);

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
          {/* <p>{itens.teste}</p> */}
          {/* <p>{itens.valor}</p> */}
          {itens.map((item) => (
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

