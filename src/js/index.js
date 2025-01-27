
// passo 1 - dar um jeito de pegar o elemento HTML da seta avancar
const btnAvancar = document.getElementById("btn-avancar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

// passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
btnAvancar.addEventListener("click", function(){
    if(cartaoAtual === cartoes.length - 1){
        return;
    }

// passo 4 - buscar o cartão que esta selecionado e esconder
const cartaoSelecionado = document.querySelector(".selecionado");
cartaoSelecionado.classList.remove("selecionado");

// passo 3 - fazer aparecer o próximo cartão da lista
console.log(cartaoAtual);
cartaoAtual++;
console.log(cartaoAtual);
cartoes[cartaoAtual].classList.add("selecionado");
});

const btnVoltar = document.getElementById("btn-voltar");

btnVoltar.addEventListener("click", function(){
    if(cartaoAtual === 0){
        return;
    }

const cartaoSelecionado = document.querySelector(".selecionado");
cartaoSelecionado.classList.remove("selecionado");

console.log(cartaoAtual);
cartaoAtual--;
console.log(cartaoAtual);
cartoes[cartaoAtual].classList.add("selecionado");
});