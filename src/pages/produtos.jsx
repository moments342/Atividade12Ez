import React, { useContext } from "react";
import { produtos } from "../components/produto";
import DivProduto from "../components/DivProduto";
import { CarrinhoContext } from "../context/CarrinhoContext";
import { IoMdCart } from "react-icons/io";

export default function Produtos() {
  const { carrinho, setCarrinhoAberto, carrinhoAberto } = useContext(CarrinhoContext);

  return (
    <div>
      {!carrinhoAberto && (
        <button className="icone-carrinho" onClick={() => setCarrinhoAberto(true)}>
          <IoMdCart size={24} />
          <span className="quantidade-carrinho">{carrinho.length}</span>
        </button>
      )}

      <div className="container">
        {produtos.map((produto, index) => (
          <DivProduto key={index} produto={produto} />
        ))}
      </div>
    </div>
  );
}
