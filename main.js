
//Criado uma constante para o formulario

const form = document.getElementById('form-deposito');


// Função para receber o nome digitado, acrescenter o separador criando uma array, contar e retornar verdadeiro ou falso

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ');
    //console.log(nomeComoArray);
    return nomeComoArray.length >= 2;
}


//função com o evento submit negado, e dentro da função existe outra onde receber o nome digitado, envia para a função validaNome e com o retorno logico faz uma condição para avisar ao usuario.

form.addEventListener('submit',function(e) {
    e.preventDefault();

    const nomeBeneficiario = document.getElementById('nome-beneficiario');
    
    //console.log(nomeBeneficiario.value);
    if (!validaNome(nomeBeneficiario.value)){
        //document.querySelector('sucess-message').innerHTML = mensagemSucesso
        alert("O nome não está completo"); 
        //console.log(validaNome(nomeBeneficiario.value));
    } else {
        alert("Tudo certo");
        //console.log("Nome OK")
        //console.log(validaNome(nomeBeneficiario.value));
    }
})




console.log(form);


