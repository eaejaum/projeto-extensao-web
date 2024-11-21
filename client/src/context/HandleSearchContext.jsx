import { createContext, useEffect, useState } from "react";



export const HandleSearchContext = createContext();

export const HandleSearchContextProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:3001/estoque");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    } finally {
      setLoading(false);
    }
  };

  // Chama a função fetchProducts quando o componente for montado
  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSearchTerm = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((item) =>
    item.NOME.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <HandleSearchContext.Provider value={{ searchTerm, setSearchTerm, handleSearchTerm, filteredProducts, loading }}>
      {children}
    </HandleSearchContext.Provider>
  );
};
