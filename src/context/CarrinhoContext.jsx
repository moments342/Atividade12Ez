import React, { createContext, useState } from "react";

export const CarrinhoContext = createContext();

export function CarrinhoProvider({ children }) {
  const [carrinho, setCarrinho] = useState([]);
  const [carrinhoAberto, setCarrinhoAberto] = useState(false);

  const adicionarAoCarrinho = (produto) => {
    setCarrinho([...carrinho, produto]);
  };

  return (
    <CarrinhoContext.Provider
      value={{ carrinho, setCarrinho, carrinhoAberto, setCarrinhoAberto, adicionarAoCarrinho }}
    >
      {children}
    </CarrinhoContext.Provider>
  );
}
