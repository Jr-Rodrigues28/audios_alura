// Função normal

// function tocaSomPom() {
//      /* Para reproduzr o som ao clicar no botão */
//      document.querySelector('#som_tecla_pom').play();
//  }

// // // /* Pra acessar o botão */                      /* Não precisa colocar tocaSomPom() */
//  document.querySelector('.tecla_pom').onclick = tocaSomPom; //um por um


// // //     // referência      // Aqui o que armazena na listaDeTeclas
//  const listaDeTeclas = document.querySelectorAll('.tecla');

// // // // Por referência de um único elemento
//  listaDeTeclas[0].onclick = tocaSomPom;

//  let contador = 0;


// // // // // tem que se ter cuidado quando se coloca o 0 < 9, pois vai bugar o computador
// // // // // Enquanto        // Aqui fica no lugar do 9, ouse ja o length é co comprimento dos números
//  while (contador < listaDeTeclas.length) {
// // // //     listaDeTeclas[contador].onclick = tocaSomPom;

//      contador = contador + 1;

//      console.log(contador);
//  }