import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

export default function Cadastro() {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [erroSenha, setErroSenha] = useState("");

  const handleCadastro = () => {
    if (!usuario || !senha || !confirmarSenha) {
      setErroSenha("Preencha todos os campos.");
      return;
    }

    if (senha !== confirmarSenha) {
      setErroSenha("As senhas não coincidem.");
      return;
    }

    const usuariosSalvos = JSON.parse(localStorage.getItem("usuarios")) || [];

    const existe = usuariosSalvos.find((u) => u.usuario === usuario);
    if (existe) {
      setErroSenha("Usuário já existe.");
      return;
    }

    usuariosSalvos.push({ usuario, senha });
    localStorage.setItem("usuarios", JSON.stringify(usuariosSalvos));

    alert("Usuário cadastrado com sucesso!");
    navigate("/");
  };

  return (
    <div className="login-container">
      <div className="login-box outlined">
        <h2 className="login-title">Cadastro</h2>

        <input
          type="text"
          placeholder="Usuário"
          className="login-input"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          className="login-input"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirmar senha"
          className="login-input"
          value={confirmarSenha}
          onChange={(e) => setConfirmarSenha(e.target.value)}
        />

        {erroSenha && <p className="erro">{erroSenha}</p>}

        <button className="btn-laranja" onClick={handleCadastro}>
          Cadastrar
        </button>

        <div className="login-footer">
          <span>Já tem uma conta?</span>
          <button className="btn-link" onClick={() => navigate("/")}>
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
}
