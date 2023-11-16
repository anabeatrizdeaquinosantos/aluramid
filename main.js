function tocaSom(){
    document.querySelector().play('');
}
document.querySelector('.tecla_pom').onclick = tocaSomPom ();

const listaDeTeclas = document.querySelectorAll('.tecla');
if(Elemento!=null && elemnto.localname==='audio'){
    Elemento.play();
}

for (contador=0;contador<listaDeTeclas.length; contador++){
   const instrumento = listaDeteclas[contador]

    const tecla=listaDeTeclas[contador]

       const idAudio=`#som_${instrumento}`;
    listaDeTeclas[contador].onclick = function()
    tocaSom(idAudio);
    };

    tecla.omkeydown=function(evento){
        if(evento.code==='space'|| evento.code==='enter'){
            tecla.classList.add('ativa');
        }
    tecla.onkeyup=function(){
        tecla.classList.remove('ativa');
    }


    tocaSom('#som_tecla_clap');
};
   