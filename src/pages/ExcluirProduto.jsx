import React from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

export default function ExcluirProduto() {
  const navigate = useNavigate();

  return (
    <div className="form-container">
      <button className="btn-voltar" onClick={() => navigate("/loja")}>
        ← Voltar para a loja
      </button>

      <h2>Excluir Produto</h2>

      <form>
        <input
          type="text"
          placeholder="ID do produto"
          className="form-input"
          disabled
        />
        <button type="button" className="btn-form-submit" disabled>
          Excluir
        </button>
      </form>

      <p className="mensagem">Funcionalidade em desenvolvimento...</p>
    </div>
  );
}
