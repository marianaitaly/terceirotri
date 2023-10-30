function tocaSom(idElementoAudio) {
    const elemento = document.querySelector(idElementoAudio).play();

    if(elemento === null){
        alert('Elemento não encontrado');
    }
}
const listaDeTeclas=document.querySelectoraAll('.tecla');
//Estrutura de repetição - Enquanto
for( let contador = 0; contado < listaDeTeclas.length; contador++){
const tecla = listaDeTeclas[contador];
const instrumento = tecla.classList[1];
const idAudio = `#som_ ${instrumento}`;

console.log(idAudio);

tecla.onclick = function () {
    tocaSom(idAudio);
};
tecla.onkeydown = function(evento){
    if(evento.code === 'Enter'|| evento.code === 'Space'){
    tecla.classList.add('ativa');
    }
};
tecla.onkeyup = function(){
    tecla.classList.remove('ativa');
};
    console.log(instrumentos);
    console.log(contador);
}