function ola(){
    console.log('Ola Mundo');
}
ola()

function nome(nome){
    let texto = `ola ${nome}`
    console.log(texto)
}

nome('Flavia')

function numero(a) {
    let dobro = (a * 2);    
    console.log(dobro)
}
numero(5)

function numeroMedia(a,b,c) {
    let media= (a + b +c)/ 3;    
    console.log(media)
}
numeroMedia(5,5,5)

function numeroMaior(a,b) {
    if(a>b){
        console.log(`O numero ${a} é o maior`)
    }else{
        console.log(`O numero ${b} é o maior`)
    }
}
numeroMaior(5,6)


function numeroPorEleMemso(a) {
    let eleMesmo= (a * a);    
    console.log( eleMesmo)
}
numeroPorEleMemso(5)

function IMC(altura, peso){
    let calculo = peso/(altura ** 2);
    console.log(calculo);
}
IMC(1.70,49)

function numerofatorial(numero) {
    if(numero ==1 || numero == 0){
        console.log(1);
    }

    let fat = 1;
    for(let i = 1; i <= numero;i++){
        fat *= i;
    }
    console.log(fat);
}
numerofatorial(4)

function dinheiro(numDolar) {
    conversao = numDolar * 4.80;
    console.log(conversao);
}
dinheiro(1)