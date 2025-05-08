import React, { useContext } from "react";
import { CarrinhoContext } from "../context/CarrinhoContext";

export default function DivProduto({ produto }) {
  const { adicionarAoCarrinho } = useContext(CarrinhoContext);

  return (
    <div className="card">
      <img src={produto.imagem} alt={produto.nome} />
      <h2>{produto.nome}</h2>
      <p className="preco">R$ {produto.valor.toFixed(2)}</p>
      <button onClick={() => adicionarAoCarrinho(produto)}>Comprar</button>
    </div>
  );
}
