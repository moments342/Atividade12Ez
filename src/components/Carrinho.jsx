import React, { useContext } from "react";
import { CarrinhoContext } from "../context/CarrinhoContext";
import { IoMdCloseCircle } from "react-icons/io";


export default function Carrinho() {
  const { carrinho, setCarrinho, carrinhoAberto, setCarrinhoAberto } = useContext(CarrinhoContext);


  const total = carrinho.reduce((acc, item) => acc + item.valor, 0);

  return (
    <div className={`carrinho-painel ${carrinhoAberto ? "aberto" : ""}`}>
      <div className="carrinho-topo">
        <h2>Seu carrinho</h2>
        <button className="btn-fechar" onClick={() => setCarrinhoAberto(false)}>
          <IoMdCloseCircle size={28} />
        </button>
      </div>

      <div className="carrinho-itens">
        {carrinho.length === 0 ? (
          <p className="vazio">Seu carrinho está vazio.</p>
        ) : (
          <ul>
            {carrinho.map((item, index) => (
              <li key={index} className="item-carrinho">
                <img src={item.imagem} alt={item.nome} />
                <div>
                  <p>{item.nome}</p>
                  <strong>R$ {item.valor.toFixed(2)}</strong>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="carrinho-total">
      <div>
        <p>Total:</p>
        <strong>R$ {total.toFixed(2)}</strong>
      </div>
      <button className="btn-limpar" onClick={() => setCarrinho([])}>
        🗑️ Limpar
      </button>
    </div>

    </div>
  );
}
