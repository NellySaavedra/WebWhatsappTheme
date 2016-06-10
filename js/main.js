(function(){
    //Variables 
    var lista = document.getElementById("lista"), // Caja de conversación
        mensajeIntup = document.getElementById("Mensaje"), //Caja de escritura de usuario
        nuevoMensaje = document.getElementById("btn-agregar");

    //Funciones
    var agregarMensaje = function(){
        var contenido = mensajeIntup.value,
            nuevoContenido = document.createElement("Caja"),
            enlace = document.createElement("p"),
            contText = document.createTextNode(contenido);

            //Para agregar contenido al panel de convesación
            enlace.appendChild(contText);
            //Para agregar p a id de Caja
            nuevoContenido.appendChild(enlace);
            //Para agregar el nuevo mensaje al panel de conversación
            lista.appendChild(nuevoContenido);
            mensajeIntup.value = "";
    };
    //Agregar mensaje
    nuevoMensaje.addEventListener("click", agregarMensaje);
//la caja no tiene estilo :(
}());




















