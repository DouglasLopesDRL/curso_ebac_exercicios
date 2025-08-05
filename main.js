//Capturando os elementos do html
const form = document.getElementById('formulario');
const valor1 = document.getElementById('iValor1');
const valor2 = document.getElementById('iValor2');
const msgV1 = document.getElementById('msgValor1');
const msgV2 = document.getElementById('msgValor2');
const msgFinal = document.getElementById('msg-final');
const msgOrientacao = document.getElementById('msg-orientacao');
//Prenchendo as mensagens
let msgCampo1 = `Campo A: Insira aqui um valor inferior ao campo 2`;
let msgCampo2 = `Campo B: Insira aqui um valor superior ao campo 1`;
const msgFinalSucess = "Parabéns!!!!"
const msgFinalFail = "Que pena!!!"
const msgOrientacaoSucess = "Os valores estavam todos corretos, campo A com o valor inferior ao campo B.";
const msgOrientacaoFail = "Os valores precisam ser diferentes, campo A deve ter um valor inferior ao do campo B"

function msgCampos(){
    msgV1.innerHTML = msgCampo1;
    valor1.classList.add('erro');
    msgV1.style.display = 'block';
    msgV2.innerHTML = msgCampo2;
    valor2.classList.add('erro');
    msgV2.style.display = 'block';
}

function validaForm(v1, v2){
    return v2 > v1;
}

function limpaForm(){
    valor1.value = "";
    valor2.value = "";
    limpaMsgs();
}

function limpaMsgs(){
    valor1.classList.remove('erro');
    msgV1.style.display = 'none';
    valor2.classList.remove('erro');
    msgV2.style.display = 'none';
}

form.addEventListener('submit', function(e){
    //impedindo que a páginarecarregue após pressionar o botão
    e.preventDefault();
    //Validação
    if(validaForm(Number(valor1.value), Number(valor2.value))){
        msgFinal.innerHTML = msgFinalSucess;
        msgFinal.style.display = 'block';
        msgOrientacao.innerHTML = msgOrientacaoSucess;
        msgOrientacao.classList.remove('fail');
        msgOrientacao.classList.add('sucess');
        msgOrientacao.style.display = 'block';
        limpaForm();
    }else{
        msgCampos();
        msgFinal.innerHTML = msgFinalFail;
        msgFinal.style.display = 'block';
        msgOrientacao.innerHTML = msgOrientacaoFail;
        msgOrientacao.classList.remove('sucess');
        msgOrientacao.classList.add('fail');
        msgOrientacao.style.display = 'block';
    }
});

valor1.addEventListener('keyup', function(e){
    limpaMsgs();
    msgFinal.style.display = 'none';
    msgOrientacao.style.display = 'none';
});

valor2.addEventListener('keyup', function(e){
    limpaMsgs();
    msgFinal.style.display = 'none';
    msgOrientacao.style.display = 'none';
});

