function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}
const listaDeTeclas=document.querySelectoraAll('.tecla');


//Estrutura de repetição - Enquanto
for(contador = 0; contado < listaDeTeclas.length; contador++){
const tecla = listaDeTeclas[contador];
const instrumento = tecla.classList[1];
const idAudio = `#som_ ${instrumento}`;
console.log(idAudio);

tecla.onclick = function () {
    tocaSom(idAudio);
};
tecla.onkeydown = function(){
    tecla.classList.add('ativa');
};
tecla.onkeyup = function(){
    tecla.classList.remove('ativa');
};
    console.log(contador);
}