function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play('');
}
const listaDeTeclas = document.querySelectorAll('.tecla')
//document.querySelector('.tecla_pom').onclick = toca
listaDeTeclas{1}.onclick = tocaSomClap;
let contador = 0;
while(contador < 9){
    listaDeTeclas[contador].onclick = function(){
        tocaSom('#som_tecla_clap');
    }
    contador =  contador + 1;
