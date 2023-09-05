import { adicionarAoCarrinho } from "./menuCarrinho";
import { catalogo } from "./utilidades";

export function renderizarCatalogo() {
    for (const protudoCatalogo of catalogo) {
        const cartaoProduto = 
                `
                <div class='border-solid w-48 m-2 flex flex-col p-2 justify-between shadow-xl shadow-slate-400 rounded-lg group' id="card-produto-${protudoCatalogo}">
                <img src="./assets/img/${protudoCatalogo.imagem}" alt="Produto 1 do Projeto Hashtag E-commerce" class='group-hover:scale-110 duration-300 my-3 rounded-lg'>
                <p class='text-sm'>${protudoCatalogo.marca}</p>
                <p class='text-sm'>${protudoCatalogo.nome}</p>
                <p class='text-sm'>$${protudoCatalogo.preco}</p>
                <button id='adicionar-${protudoCatalogo.id}' class='bg-slate-950 hover:bg-slate-700 text-slate-200'"><i class="fa-solid fa-cart-plus"></i></button>
                </div>
                `;
        document.getElementById("container-produto").innerHTML += cartaoProduto
    }

    for (const protudoCatalogo of catalogo) {
        document
            .getElementById(`adicionar-${protudoCatalogo.id}`)
            .addEventListener("click", () => adicionarAoCarrinho(protudoCatalogo.id));
    }
    
}