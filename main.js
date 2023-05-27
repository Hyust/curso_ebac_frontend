
const form = document.getElementById('form');
const primeiroNumero = document.getElementById('numero-1');
//console.log(primeiroNumero);
const segundoNumero = document.getElementById('numero-2');
//console.log(segundoNumero);
let formEValido = false;
console.log(primeiroNumero,formEValido);


//Função para saber que é o maior valor;
function validaNumero(a,b){
    var valor1 = parseInt(a.value);
    var valor2 = parseInt(b.value);
    const resultado = valor1 < valor2;
    console.log(valor1,valor2,resultado);
    return resultado;
}

form.addEventListener('submit',function(e) {
    
    e.preventDefault();


    const mensagemSucesso = `SUCESSO! - O Segundo Numero: <b>${segundoNumero.value} </b>  é maior que o primeiro Numero: <b>${primeiroNumero.value}</b> `;
    const mensagemError = `Infelizmente o primeiro Numero precisa ser menor que o segundo Numero`;

    formEValido = validaNumero(primeiroNumero,segundoNumero);



    const containerMensagemSucesso = document.querySelector('.sucess-message');
    containerMensagemSucesso.innerHTML = mensagemSucesso;


    const containerMensagemError = document.querySelector('.error-message');
    containerMensagemError.innerHTML = mensagemError;

if(formEValido){
    
    containerMensagemSucesso.style.display = 'block'
    containerMensagemError.style.display = 'none'

}else{
    
    containerMensagemError.style.display = 'block'
    containerMensagemSucesso.style.display = 'none'

}

})




