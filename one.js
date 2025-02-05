// El Array que almacena los nombres de los amigos
let amigos = [];
let amigoSorteado = null;  

// Función para agregar amigos
function agregarAmigo() {
    // Obtener el valor del campo de texto
    const nombreAmigo = document.getElementById('amigo').value;

    // Validar que el campo no esté vacío
    if (nombreAmigo.trim() === "") {
        alert("Por favor, inserte un nombre.");
        return; // No hacer nada si el campo está vacío
    }

    // Agregar el nombre al array de amigos
    amigos.push(nombreAmigo);

    // Limpiar el campo de texto
    document.getElementById('amigo').value = "";

    // Actualizar la lista de amigos en la página
    actualizarListaAmigos();
}

// Función para actualizar la lista de amigos en la página
function actualizarListaAmigos() {
    // Obtener el elemento de la lista HTML donde se mostrarán los amigos
    const lista = document.getElementById('listaAmigos');

    // Limpiar la lista existente (evitar duplicados)
    lista.innerHTML = "";

    // Iterar sobre el array 'amigos' y agregar cada nombre a la lista
    for (let i = 0; i < amigos.length; i++) {
        // Crear un nuevo elemento de lista (<li>)
        const li = document.createElement('li');
        
        // Asignar el nombre del amigo al contenido del <li>
        li.textContent = amigos[i];
        
        // Agregar el <li> a la lista HTML
        lista.appendChild(li);
    }
}

// Función para sortear el amigo secreto
function sortearAmigo() {
   
    // Validar que haya al menos un amigo en el array
    if (amigos.length === 0) {
        alert("Por favor, añada al menos un amigo antes de sortear.");
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el amigo sorteado
    amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en la página
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>¡El amigo secreto es: ${amigoSorteado}!</li>`;
}

// Función para hacer un nuevo sorteo
function nuevoSorteo() {
    // Limpiar el nombre sorteado
    amigoSorteado = null;

    // Limpiar la lista de resultados
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = "";

    // Limpiar la lista de amigos
    amigos = [];

    // Actualizar la lista de amigos en la página (que ahora estará vacía)
    actualizarListaAmigos();

    // Habilitar el sorteo nuevamente
    alert("La lista de amigos ha sido borrada. Puedes empezar de nuevo.");
}
