// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];


function agregarAmigo() {
    let nombreAmigo = document.querySelector('#amigo').value;
    console.log(nombreAmigo);

    if (nombreAmigo == '') {
        alert('agregar nombre')
    } else {
        amigos.push(nombreAmigo)
        document.querySelector('#amigo').value = '';
        
    }
}

function actualizar(amigos) {
   const lista  = document.getElementById('listaAmigos').value; 
   lista.innerHTML = "";

     // Iterar sobre el arreglo amigos
     for ( let amigo of amigos) {
        // Crear un nuevo elemento de lista para cada amigo
        
         }
   }
   actualizarListaAmigos(amigos);

   function sortearAmigo() {
    let sortearAmigo =  Math.floor(Math.random()*amigos.length)+1;

    }
    document.querySelector(sortearAmigo);