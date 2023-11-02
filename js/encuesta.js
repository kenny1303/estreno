
    //ESTA FUNCION LO QUE HACE ES QUE TOMA LOS DATOS DE LOS PRIMEROS IMPUTS
    document.addEventListener('DOMContentLoaded', function() {
        const formulario = document.querySelector('.formulario');
        formulario.addEventListener('submit', function(e) {
            e.preventDefault();
            const data = {};
            
            // Recopilar datos de elementos input
            const inputs = formulario.querySelectorAll('input[name]');
            inputs.forEach(input => {
                data[input.name] = input.value;
            });

            // Recopilar datos de elementos radio
            const radios = formulario.querySelectorAll('input[type="radio"]:checked');
            radios.forEach(radio => {
                data[radio.name] = radio.value;
            });

            // Recopilar datos de elementos textarea
            const textareas = formulario.querySelectorAll('textarea[name]');
            textareas.forEach(textarea => {
                data[textarea.name] = textarea.value;
            });

            // Mostrar datos en el alert
            alert(JSON.stringify(data, null, 2));

        });
    });
    
    //ESTA FUNCION LO QUE HACE ES QUE EL TEXTAREA SE AGRANDE DEPENDIENDO LO QUE SE ESCRIBA EN EL MISMO
    function autoResize() {
        const textareas = document.querySelectorAll(".campo__textarea");
        textareas.forEach(function(textarea) {
            textarea.style.height = "auto"; // Restablece la altura a automática
            textarea.style.height = (textarea.scrollHeight) + "px"; // Ajusta la altura al contenido
        });
    }

    const textareas = document.querySelectorAll(".campo__textarea");
    textareas.forEach(function(textarea) {
        textarea.addEventListener("input", autoResize);
    });

    //ESTA FUNCION LO QUE HACE ES PROCESAR LOS DATOS DE LOS INPUTS Y MOSTRARLOS EN EL ALERT
    function procesarDatos() {
        var yo = document.getElementById("yo").value;
        var CC = document.getElementById("CC").value;
        var de = document.getElementById("de").value;
        var cargo = document.getElementById("cargo").value;

        // Verificar si todos los campos requeridos están llenos
        if (yo && CC && de && cargo) {
            var mensaje = "Yo, " + yo + " identificado con C.C. No " + CC + " de " + de + " trabajador de la empresa ALIANZA ESTRENO S.A.S. desempeño el cargo de " + cargo + " declaro que he recibido por parte de la empresa la inducción/reinducción correspondiente a la descripción de la empresa y el Sistema de Gestión en Seguridad y Salud en el Trabajo, la cual he recibido, comprendido y me comprometo a cumplir las normas internas de la organización";
            alert(mensaje);
        } else {
            alert("Por favor, complete todos los campos requeridos.");
        }
    }

    // Obtén la celda y la textarea por sus identificadores
var cell = document.getElementById("miTextarea").parentNode;
var textarea = document.getElementById("miTextarea");

// Función para ajustar el tamaño de la textarea                    
function ajustarTamano() {
  textarea.style.width = cell.clientWidth + 'px';
  textarea.style.height = cell.clientHeight + 'px';
}


function validarFormulario() {
    // Obtén los valores de los campos del formulario
    var nombre = document.getElementById("nombre").value;
    var cargo = document.getElementById("cargo").value;
    var cedula = document.getElementById("cedula").value;
    var fecha = document.getElementById("fecha").value;

    // Verifica si los campos están vacíos
    if (nombre === "" || cargo === "" || cedula === "" || fecha === "") {
        alert("Por favor, completa todos los campos del formulario.");
        return false; // Evita que el formulario se envíe
    }

    // Si todos los campos están completos, el formulario se envía
    return true;
}

function procesarDatos() {
    // Obtén los valores de los campos del formulario
    var nombre = document.getElementById("nombre").value;
    var fecha = document.getElementById("fecha").value;

    // Verifica si los campos están vacíos
    if (nombre === "" || fecha === "") {
        alert("Por favor, completa todos los campos del formulario.");
        return false; // Evita que el formulario se envíe
    }

    // Si todos los campos están completos, el formulario se envía
    alert("¡GRACIAS POR TU APOYO!" );
    return true;   
}

var validarRadios = function() {
    var opciones = document.getElementsByName('sexo'),
      resultado = false;

    for (var i = 0; i < elementos.length; i++) {
      if (elementos[i].type == "radio" && elementos[i].name == "sexo") {
        // Recorremos los radio button
        for (var o = 0; o < opciones.length; o++) {
          if (opciones[o].checked) {
            resultado = true;
            break;
          }
        }

        if (resultado == false) {
          elementos[i].parentNode.className = elementos[i].parentNode.className + " error";
          console.log('El campo sexo esta incompleto');
          return false;
        } else {
          // Eliminamos la clase Error del radio button
          elementos[i].parentNode.className = elementos[i].parentNode.className.replace(" error", "");
          return true;
        }
      }
    }
  };

  function irAInicio() {
    // Redirigir al usuario a la página de inicio
    window.location.href="../index.html";
  }





  
 


    