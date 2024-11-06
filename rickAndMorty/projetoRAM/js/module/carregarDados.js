
const url = "https://rickandmortyapi.com/api/character";

async function carregarDados() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        exibirPersonagens(data.results);
    } catch (error) {
        console.error("Erro ao carregar dados:", error);
    }
}

function exibirPersonagens(personagens) {
    const cardProdutos = document.getElementById("cardProdutos");
    cardProdutos.innerHTML = "";

    personagens.forEach(personagem => {
        const caixaProduto = document.createElement("div");
        caixaProduto.classList.add("caixa_produto");

        const caixaTitulo = document.createElement("h2");
        caixaTitulo.classList.add("caixa_titulo");
        caixaTitulo.textContent = personagem.name; 

        const caixaImagem = document.createElement("figure");
        caixaImagem.classList.add("caixa_imagem");
        const img = document.createElement("img");
        img.src = personagem.image; 
        img.alt = personagem.name;

        caixaImagem.appendChild(img);
        caixaProduto.appendChild(caixaTitulo);
        caixaProduto.appendChild(caixaImagem);

        cardProdutos.appendChild(caixaProduto);
    });
}

document.addEventListener("DOMContentLoaded", carregarDados);
