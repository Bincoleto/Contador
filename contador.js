/* -- Somar -- */

const clickSomar = document.querySelector('#somar');

function somar(){
    const contador = document.querySelector('.numero-contador');
    const total = Number(contador.innerText) + 1;
    salva(Number(contador.innerText))
    contador.innerText = total;
}

function salva(num){
    const contador = document.querySelector('.num-ant');
    contador.innerText = num;
}

if(clickSomar){
    clickSomar.addEventListener('click', somar);
}

/* -- Remover -- */

const clickRemover = document.querySelector("#remover");

function subtrair(){
    const contador = document.querySelector('.numero-contador');
    const totalAtual = Number(contador.innerText);
    salva( totalAtual)
    if(totalAtual > 0){
        const total = totalAtual - 1
        contador.innerText = total;
    }
}

clickRemover.addEventListener('click', subtrair);

/* -- Zerar Contador -- */

const clickZerar = document.querySelector('#zerar');

function zerarContador(){
    const contador = document.querySelector('.numero-contador');
    salva( Number(contador.innerText))
    contador.innerText = 0;
}

clickZerar.addEventListener('click', zerarContador);