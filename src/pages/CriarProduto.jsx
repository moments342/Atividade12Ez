import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { criarProduto } from "../service/produtoService";
import "../index.css";

export default function CriarProduto() {
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");
  const [imagem, setImagem] = useState("");
  const [mensagem, setMensagem] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await criarProduto({
        nome,
        valor: parseFloat(valor),
        imagem,
      });
      setMensagem("Produto criado com sucesso!");
      setNome("");
      setValor("");
      setImagem("");
      setTimeout(() => navigate("/loja"), 1500);
    } catch {
      setMensagem("Erro ao criar produto.");
    }
  };

  return (
    <div className="form-container">
      <button className="btn-voltar" onClick={() => navigate("/loja")}>
        ← Voltar para a loja
      </button>

      <h2 className="form-titulo">Cadastrar Produto</h2>

      <form onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <input
          className="form-input"
          type="number"
          placeholder="Valor"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          required
        />
        <input
          className="form-input"
          type="text"
          placeholder="URL da imagem"
          value={imagem}
          onChange={(e) => setImagem(e.target.value)}
          required
        />
        <button type="submit" className="btn-form-submit">
          Cadastrar
        </button>
      </form>

      {mensagem && <p className="mensagem">{mensagem}</p>}
    </div>
  );
}
