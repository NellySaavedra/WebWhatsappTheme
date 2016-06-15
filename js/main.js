// input de busqueda de contactos
        function doSearch(){
            var tableReg = document.getElementById('datos'); //Id de toda la tabla
            var searchText = document.getElementById('searchTerm').value.toLowerCase(); // Id del input de búsqueda
            var cellsOfRow = "";
            var found = false;
            var compareWith = "";
            // Recorremos todas las filas con contenido de la tabla
            for (var i = 1; i < tableReg.rows.length; i++){
                cellsOfRow = tableReg.rows[i].getElementsByTagName('b'); // Renglones de búsqueda
                found = false;
                // Recorremos todas las celdas
                for (var j = 0; j < cellsOfRow.length && !found; j++){
                    compareWith = cellsOfRow[j].innerHTML.toLowerCase();
                    // Buscamos el texto en el contenido de la celda
                    if (searchText.length == 0 || (compareWith.indexOf(searchText) > -1)){
                        found = true;
                    }
                }
                if(found){
                    tableReg.rows[i].style.display = '';
                } else {
                    // si no ha encontrado ninguna coincidencia, esconde la
                    // fila de la tabla
                    tableReg.rows[i].style.display = 'none';
                }
            }
        }

// ------------------------------
//Ligar la imagen del contacto a la caja de conversación
var img = ["logocodeacademy.png", "raymi.jpg", 
           "mariana.jpg", "anamaria.jpg", 
           "rodulfo.jpg", "andrea.jpg", 
           "mariapaula.jpg", "katy.jpg", "aldo.jpg"];

var contactos = ["Laboratoria Perú", "Raymi Saldomando", 
                "Mariana Costa", "Ana María Martínez Franklin", 
                "Rodulfo Prieto", "Andrea Lamas", 
                "Maria Paula Rivera", "Katy Sanchez",
                "Aldo Alfaro"];

var estado = ["Griss, Lupis, Eli, Elsa, Yo", "En línea", 
              "En línea", "En línea", 
              "En línea", "En línea", 
              "En línea", "En línea",
              "En línea"];

$(document).ready(function(){
    $(".ContenedorCont").click(function(){//clase de los contactos
        var data = $(this).attr("data");// todos los contactos tienen ese un numero data empezando por cero
        $(".Der").remove();//Limpia el panel al dar click en otro usuario
        $("#CUno").html('<img src="image/' + img[data] + '" class="ImgContac2">');//Se agrega imagen a panel de conversación
        $("#CDos").html('<b>' + contactos[data] + '</b>'+ '<br>' + estado[data]);//Se agraga nombre de usuario en panel de conversación
    });
});

// ------------------------------
// Input para añadir mensajes a la conversación

(function(){
    //Variables 
    var lista = document.getElementById("lista"), // Panel de conversación
        mensajeIntup = document.getElementById("Mensaje"), //Input de escritura de usuario
        nuevoMensaje = document.getElementById("btn-agregar"); //Botón que sube el mensaje al panel

    //Funciones
    var agregarMensaje = function(){
        var contenido = mensajeIntup.value,
            nuevoContenido = document.createElement("Caja"), //Div "Burbuja"
            BurbujaConHora = document.getElementById('Mensaje').value; 
            nuevoContenido.innerHTML ='<div class= "Der">'+ BurbujaConHora + '<br>' + '<span>'+ moment().format("HH:mm")+'</span>'+'</div>';
            contText = document.createTextNode(contenido);
            //Para agregar el nuevo mensaje al panel de conversación
            lista.appendChild(nuevoContenido);
            //Para limpiar input
            mensajeIntup.value = "";
    };
    //Agregar mensaje
    nuevoMensaje.addEventListener("click", agregarMensaje);
    //Agregar mensaje con Enter
    $(document).keypress(function(e){
        if(e.which == 13){
            agregarMensaje();
        };
    });
}());
//Funcion que envia a la ventana de chat el mensaje del usuario//

// ------------------------------
// Guardar conversación
var agregarMensajeAnterior = function(){
    for (i=0; i<**.length; i++){
        var temp = **[i];
        var contacto = $('**').text();
        if (contacto==temp.**){
            var MensajeAnterior = temp.**
            console.log(MensajeAnterior)
            var nuevoMensaje = document.createElement("div"),
                contenido = document.createTextNode(MensajeAnterior);
            $(nuevoMensaje).addClass("Der");
            nuevoMensaje.appendChild(contenido);
            Caja.appendChild(nuevoMensaje);
        }
    }
};
// ------------------------------

        
















