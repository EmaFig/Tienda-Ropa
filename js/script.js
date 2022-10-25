/* SCRIPTS */

/*INDEX*/
function mostrar_boton_1(){
    document.getElementById("carrito_oferta_1").style.visibility="visible";
}

function ocultar_boton_1(){
    document.getElementById("carrito_oferta_1").style.visibility="hidden";
}

function mostrar_boton_2(){
    document.getElementById("carrito_oferta_2").style.visibility="visible";
}

function ocultar_boton_2(){
    document.getElementById("carrito_oferta_2").style.visibility="hidden";
}

function mostrar_boton_3(){
    document.getElementById("carrito_oferta_3").style.visibility="visible";
}

function ocultar_boton_3(){
    document.getElementById("carrito_oferta_3").style.visibility="hidden";
}


function mostrar_boton_4(){
    document.getElementById("carrito_oferta_4").style.visibility="visible";
}

function ocultar_boton_4(){
    document.getElementById("carrito_oferta_4").style.visibility="hidden";
}

/* VALIDAR CONTACTO */

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var correo = document.getElementById('correo').value;
    if(correo.length == 0) {
      alert('No has escrito nada en el Correo');
      return;
    }
    var comentario = document.getElementById('comentario').value;
    if (comentario.length == 0) {
      alert('No a escrito comentario');
      return;
    }
    this.submit();
  }