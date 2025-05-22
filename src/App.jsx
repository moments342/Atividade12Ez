import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Produtos from "./pages/produtos";
import Carrinho from "./components/Carrinho";
import { CarrinhoProvider } from "./context/CarrinhoContext";

function App() {
  const estaLogado = !!localStorage.getItem("logado"); //o controle esta sendo feito aqui, visto que ainda nao foi pedido um botao de logout

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route
          path="/loja"
          element={
            estaLogado ? (
              <CarrinhoProvider>
                <Carrinho />
                <Produtos />
              </CarrinhoProvider>
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
