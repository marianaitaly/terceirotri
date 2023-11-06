function tocaSom(idElementoAudio){
    document.querySelector('idElementoAudio') . play();}
const listaDeTeclas = document.querySelectorAll('.tecla');


document.querySelectorAll('.tecla');
const listaDeTeclas=document.querySelectorAll('.tecla');
let contador = 0;
//Estrutura de repetição - enquanto
while(contador < listaDeTeclas.length) {
    listaDeTeclas[contador] . onclick = tocaSomPom;
    contador = contador + 1;
}
