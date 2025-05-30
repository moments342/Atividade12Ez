import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../service/api";
import { deletarProduto } from "../service/produtoService";
import "../index.css";

export default function ExcluirProduto() {
  const [produtos, setProdutos] = useState([]);
  const [mensagem, setMensagem] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    api
      .get("/produtos/ler")
      .then((res) => setProdutos(res.data))
      .catch(() => setMensagem("Erro ao carregar produtos."));
  }, []);

  const handleDelete = async (id) => {
    try {
      await deletarProduto(id);
      setMensagem("Produto excluído com sucesso!");
      setProdutos(produtos.filter((p) => p.id !== id));
    } catch (error) {
      setMensagem("Erro ao excluir produto.");
      console.error(error);
    }
  };

  return (
    <div className="form-container">
      <button className="btn-voltar" onClick={() => navigate("/loja")}>
        ← Voltar para a loja
      </button>

      <h2 className="form-titulo">Excluir Produto</h2>

      {mensagem && <p className="mensagem">{mensagem}</p>}

      {produtos.length === 0 ? (
        <p>Nenhum produto encontrado.</p>
      ) : (
        <ul className="lista-produtos">
          {produtos.map((produto) => (
            <li key={produto.id} className="item-produto">
              <span>{produto.nome}</span>
              <button
                className="btn-excluir"
                onClick={() => handleDelete(produto.id)}
              >
                Excluir
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
