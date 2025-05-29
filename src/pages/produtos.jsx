import React, { useContext, useState, useEffect } from "react";
import DivProduto from "../components/DivProduto";
import { CarrinhoContext } from "../context/CarrinhoContext";
import { IoMdCart } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Produtos() {
  const { carrinho, setCarrinhoAberto, carrinhoAberto } = useContext(CarrinhoContext);
  const { logout, usuario } = useAuth();
  const [menuAberto, setMenuAberto] = useState(false);
  const [produtos, setProdutos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/produtos/ler")
      .then((res) => setProdutos(res.data))
      .catch((err) => console.error("Erro ao buscar produtos:", err));
  }, []);

  return (
    <div>
      <button className="btn-menu" onClick={() => setMenuAberto(!menuAberto)}>
        <CiMenuBurger size={30} />
      </button>

      <div className={`menu-lateral ${menuAberto ? "aberto" : ""}`}>
        <h3 style={{ marginTop: "60px" }}>Olá, {usuario}</h3>

        <button className="btn-menu-link" onClick={() => navigate("/criar-produto")}>
          Criar Produto
        </button>

        <button className="btn-menu-link" onClick={() => navigate("/excluir-produto")}>
          Excluir Produto
        </button>

        <button className="btn-menu-link" onClick={() => navigate("/atualizar-produto")}>
          Atualizar Produto
        </button>


        <button className="btn-logout" onClick={() => {
          logout();
          window.location.href = "/";
        }}>
          Logout
        </button>
      </div>

      {!carrinhoAberto && (
        <button className="icone-carrinho" onClick={() => setCarrinhoAberto(true)}>
          <IoMdCart size={24} />
          <span className="quantidade-carrinho">{carrinho.length}</span>
        </button>
      )}

      <div className="container" style={{ marginTop: "60px" }}>
        {produtos.map((produto, index) => (
          <DivProduto key={index} produto={produto} />
        ))}
      </div>
    </div>
  );
}
