//arreglo que contiene las respuestas correctas
let correctas = [3,4,4,5,2,2,2,1,2,1];

//arreglo donde se guardan las respuestas del usuario
let opcion_elegida=[];

let cantidad_correctas=0;

//funcion que toma el num de preguntas y el input elegido de esa pregunta
function respuesta(num_pregunta, seleccionada){
    //guardo la respuesta elegida
    opcion_elegida[num_pregunta] = seleccionada.value;
}

//funcion que compara los arreglos para saber cuantas estuvieron correctas
 function corregir(){
     cantidad_correctas = 0;
    for( i=0; i < correctas.length;i++){
        if(correctas[i]==opcion_elegida[i]){
             cantidad_correctas++;
        }
     }
     
    document.getElementById("resultado").innerHTML = cantidad_correctas;
    var nombre = document.getElementById('nombre').value;
    var cargo = document.getElementById('cargo').value;
    var lugar = document.getElementById('lugar').value;
    var fecha = document.getElementById('fecha').value;

   // Validar que todos los campos requeridos estén completos
   if (nombre && cargo && lugar && fecha) {
       // Mostrar los datos en un alert
       alert("NOMBRE: " + nombre + "\nCARGO: " + cargo + "\nLUGAR: " + lugar + "\nFECHA: " + fecha);
    } else {
        alert("Por favor, complete todos los campos requeridos.");
   }
   
}

function ocultarYRecargar() {
    // Obtener el número de intentos almacenado en localStorage o establecerlo en 0 si no existe
    var intentos = parseInt(localStorage.getItem('intentos')) || 0;

    // Verificar si el número de intentos es menor que 3
    if (intentos < 2) {
        // Ocultar el botón
        var reloadButton = document.getElementById('reloadButton');
        reloadButton.style.display = 'none';

        // Incrementar el número de intentos
        intentos++;

        // Almacenar el nuevo número de intentos en localStorage
        localStorage.setItem('intentos', intentos);

        // Recargar la página después de 1 segundo (1000 milisegundos)
        setTimeout(function() {
            location.reload();
        }, 1000);
    } else {
        alert("Has agotado tus intentos.");
    }
}

// Verificar si el botón debe estar oculto después de cargar la página
window.onload = function() {
    var botonOculto = localStorage.getItem('intentos');
    if (botonOculto >= 3) {
        var reloadButton = document.getElementById('reloadButton');
        reloadButton.style.display = 'none';
    }
}


