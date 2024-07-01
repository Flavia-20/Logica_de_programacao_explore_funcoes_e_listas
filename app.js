
let listaDeNumerosSorteados = [];
let numeroLimite = 3;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoInicialNaTela(tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial(){
    exibirTextoInicialNaTela('h1','Jogo do numero secreto')// todo lugar qu a função for chamada vai modificar o h1
    exibirTextoInicialNaTela('p','Escolha um número entre 1 e 10')// todo lugar qu a função for chamada vai modificar o p
}

//função sem retorno e sem parametro
function verificarChute(){
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto){
        exibirTextoInicialNaTela('h1','Acertou');
        let palavraTentativas = tentativas < 1? 'tentativas': 'tentativa';
        let mensagemTentativas = `Voce descobriu o numero secreto com ${tentativas} ${palavraTentativas}!`
        exibirTextoInicialNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else{
        if(chute > numeroSecreto){
            exibirTextoInicialNaTela('p','O numero secreto é menor');
        }else{
            exibirTextoInicialNaTela('p', 'O numero secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
    
}

//função com retorno e sem parametro
function gerarNumeroAleatorio() {
   let numeroEscolhido= parseInt( Math.random() * numeroLimite + 1);
   let quantidadeElementosLista = listaDeNumerosSorteados.length;
   if(quantidadeElementosLista == numeroLimite){
        listaDeNumerosSorteados = [];
   }
   if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio()//chama a própria função para que outro numero seja gerado caso o anterior já esteja na lista
   }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);  
        return numeroEscolhido;        
   }
}

function limparCampo() {
    chute = document.querySelector('input')
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled',true);
}

