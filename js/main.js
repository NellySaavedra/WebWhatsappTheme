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
            enlace = document.createElement("p"), //Contenido de "Burbuja"
            contText = document.createTextNode(contenido);

            //Para agregar contenido al panel de convesación
            enlace.appendChild(contText);
            //Para agregar p a id de Caja
            nuevoContenido.appendChild(enlace);
            //Para agregar el nuevo mensaje al panel de conversación
            lista.appendChild(nuevoContenido);
            //Para limpiar input
            mensajeIntup.value = "";
            //Estilo de burbuja: a <p> que es "enlace" se le aplica "Der" que es el estilo de div.
            enlace.setAttribute("class", "Der");
    };
    //Agregar mensaje
    nuevoMensaje.addEventListener("click", agregarMensaje);
}());
// ------------------------------




















