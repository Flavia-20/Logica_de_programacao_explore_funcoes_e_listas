
let numeroSecreto = gerarNumeroAleatorio();


function exibirTextoInicialNaTela(tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

//função sem retorno e sem parametro
function verificarChute(){
    let chute = document.querySelector('input').value;


    console.log(chute == numeroSecreto);
}

//função com retorno e sem parametro
function gerarNumeroAleatorio() {
   return parseInt( Math.random() * 10 + 1);
}




exibirTextoInicialNaTela('h1','Jogo do numero secreto')// todo lugar qu a função for chamada vai modificar o h1
exibirTextoInicialNaTela('p','Escolha um número entre 1 e 10')// todo lugar qu a função for chamada vai modificar o p