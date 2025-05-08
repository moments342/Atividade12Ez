import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

export default function Login() {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [erroLogin, setErroLogin] = useState("");

  const handleEntrar = (e) => {
    e.preventDefault();

    const usuariosSalvos = JSON.parse(localStorage.getItem("usuarios")) || [];

    const usuarioValido = usuariosSalvos.find(
      (u) => u.usuario === usuario && u.senha === senha
    );

    if (usuarioValido) {
      localStorage.setItem("logado", usuarioValido.usuario);
      navigate("/loja");
    } else {
      setErroLogin("Usuário ou senha inválidos.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box outlined">
        <h2 className="login-title">Login</h2>

        <form onSubmit={handleEntrar}>
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

          {erroLogin && <p className="erro">{erroLogin}</p>}

          <button type="submit" className="btn-laranja">
            Entrar
          </button>
        </form>

        <div className="login-footer">
          <span>Ainda não tem conta?</span>
          <button className="btn-link" onClick={() => navigate("/cadastro")}>
            Cadastrar
          </button>
        </div>
      </div>
    </div>
  );
}
