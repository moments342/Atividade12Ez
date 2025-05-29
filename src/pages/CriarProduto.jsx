import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../index.css";

export default function CriarProduto() {
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");
  const [imagem, setImagem] = useState("");
  const [mensagem, setMensagem] = useState("");
  const navigate = useNavigate();

  const handleCriar = async (e) => {
    e.preventDefault();

    if (!nome || !valor || !imagem) {
      setMensagem("Preencha todos os campos.");
      return;
    }

    try {
      await axios.post("http://localhost:3000/produtos/criar", {
        nome,
        valor: parseFloat(valor),
        imagem,
      });

      setMensagem("Produto criado com sucesso!");
      setNome("");
      setValor("");
      setImagem("");

      setTimeout(() => {
        navigate("/loja");
      }, 1500);
    } catch (error) {
      setMensagem("Erro ao criar produto.");
      console.error(error);
    }
  };

  return (
    <div className="form-container">
      <button className="btn-voltar" onClick={() => navigate("/loja")}>
        ← Voltar para a loja
      </button>
      <h2>Criar Novo Produto</h2>
      <form onSubmit={handleCriar}>
        <input
          type="text"
          placeholder="Nome do produto"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="form-input"
        />
        <input
          type="number"
          placeholder="Valor"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          className="form-input"
        />
        <input
          type="text"
          placeholder="URL da imagem"
          value={imagem}
          onChange={(e) => setImagem(e.target.value)}
          className="form-input"
        />
        <button type="submit" className="btn-form-submit">
          Criar
        </button>
      </form>
      {mensagem && <p className="mensagem">{mensagem}</p>}
    </div>
  );
}
