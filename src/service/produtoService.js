import { api } from "./api";

export async function criarProduto({ nome, valor, imagem }) {
  const resposta = await api.post("/produtos/criar", {
    nome,
    valor,
    imagem,
  });
  return resposta.data;
}

export async function deletarProduto(id) {
  return await api.delete("/produtos/deletar", {
    data: { id },
  });
}
