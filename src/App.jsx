import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Produtos from "./pages/produtos";
import CriarProduto from "./pages/CriarProduto";
import Carrinho from "./components/Carrinho";
import { CarrinhoProvider } from "./context/CarrinhoContext";
import { useAuth } from "./context/AuthContext";
import ExcluirProduto from "./pages/ExcluirProduto";
import AtualizarProduto from "./pages/AtualizarProduto";



function App() {
  const { usuario } = useAuth();

  return (
    <Router>
      <Routes>
        {/* Rota pública */}
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />

        {/* Rota protegida: loja */}
        <Route
          path="/loja"
          element={
            usuario ? (
              <CarrinhoProvider>
                <Carrinho />
                <Produtos />
              </CarrinhoProvider>
            ) : (
              <Navigate to="/" />
            )
          }
        />

        {/* Rota protegida: criar produto */}
        <Route
          path="/criar-produto"
          element={
            usuario ? (
              <CriarProduto />
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/excluir-produto"
            element={
              usuario ? (<ExcluirProduto /> 
              ) : ( <Navigate to="/" /> )
            }
        />

        <Route
          path="/atualizar-produto"
          element={
            usuario ? <AtualizarProduto /> : <Navigate to="/" />
          }
        />


      </Routes>
    </Router>
  );
}

export default App;
