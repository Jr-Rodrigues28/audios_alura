function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

                                  // Aqui vale 9 que são a quantidade de audios sendo que começa com 0
for (let contador = 0; contador < listaDeTeclas.length; contador ++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    
    console.log(idAudio);

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    console.log(contador);


    // add a classe ativa do css, para quando clicar nos botões com alguma tecla
    // do teclado neste caso ENTER ou BARRA DE ESPAÇO, deixa da cor vermelha 
    tecla.onkeydown = function () {
        tecla.classList.add('ativa');
    }


    // Caso mantenha a tecla ENTER ou ESPAÇO pressionada ela fica da cor vermelha, caso
    // solte ela volta para a cor de origem
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

}