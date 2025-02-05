🎁 Juego "Amigo Secreto"
El Juego de Amigo Secreto es una herramienta interactiva que facilita la organización de un sorteo entre amigos. Permite ingresar una lista de participantes y asigna aleatoriamente un "amigo secreto" a cada uno, asegurando una distribución justa y divertida.

🎮 ¿Cómo funciona?
Abre el archivo index.html en tu navegador.
Ingresa los nombres de los participantes en el campo de texto.
Haz clic en "Añadir" para agregarlos a la lista.
Una vez completada la lista, haz clic en "Sortear Amigo Secreto".
El sistema asignará aleatoriamente cada participante a otro como su amigo secreto.
¡Diviértete organizando la entrega de regalos! 🎉
✨ Características
✅ Interfaz intuitiva y fácil de usar.
✅ Permite añadir varios nombres sin repeticiones.
✅ Sorteo aleatorio asegurando que nadie se asigne a sí mismo.
✅ Mensajes dinámicos para mejorar la experiencia del usuario.

🛠️ Tecnologías utilizadas
🔹 HTML - Para la estructura del juego.
🔹 CSS - Para mejorar la apariencia visual.
🔹 JavaScript - Para manejar la lógica del sorteo y la interacción con el usuario.

📜 Código principal (Ejemplo de la función de sorteo)
javascript
Copiar
Editar
function sortearAmigoSecreto(listaDeAmigos) {
    let asignaciones = {};
    let amigosDisponibles = [...listaDeAmigos];

    listaDeAmigos.forEach(amigo => {
        let posiblesOpciones = amigosDisponibles.filter(a => a !== amigo);
        if (posiblesOpciones.length === 0) {
            alert("Error en el sorteo, intenta nuevamente.");
            return;
        }
        let amigoSecreto = posiblesOpciones[Math.floor(Math.random() * posiblesOpciones.length)];
        asignaciones[amigo] = amigoSecreto;
        amigosDisponibles = amigosDisponibles.filter(a => a !== amigoSecreto);
    });

    return asignaciones;
}
🚀 Mejoras futuras
🔹 Implementar una opción para enviar las asignaciones por correo.
🔹 Guardar la lista de amigos en localStorage para no perder los datos al recargar.
🔹 Agregar una animación para el sorteo y mejorar la interfaz con CSS.

📌 Instalación y uso
Descarga o clona el repositorio en tu computadora.
Abre index.html en cualquier navegador moderno.
Ingresa los nombres y realiza el sorteo.
¡Disfruta del juego y sorprende a tus amigos! 🎁
📢 Ideal para fiestas, reuniones y eventos de intercambio de regalos.