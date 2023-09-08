import { desenharProdutosCarrinhoSimples, lerLocalStorage } from "./src/utilidades";

function desenharProdutosCheckout() {
    const idsProdutoCarrinhoComQuantidade = lerLocalStorage("carrinho");
    for (const idProduto in idsProdutoCarrinhoComQuantidade) {
        desenharProdutosCarrinhoSimples(idProduto, "container-produto-checkout", idsProdutoCarrinhoComQuantidade[idProduto]);
    }
}

desenharProdutosCheckout();