function ola(){
    console.log('Ola Mundo');
}
ola()

function nome(nome){
    texto = `ola ${nome}`
    console.log(texto)
}

nome('Flavia')

function numero(a) {
    dobro = (a * 2);    
    console.log(dobro)
}
numero(5)

function numeroMedia(a,b,c) {
    media= (a + b +c)/ 3;    
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
    eleMesmo= (a * a);    
    console.log(dobro)
}
numeroPorEleMemso(5)
