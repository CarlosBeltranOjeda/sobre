document.addEventListener('DOMContentLoaded', () => {
    const envelopeWrapper = document.querySelector('.envelope-wrapper');
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');

    // Cambia el cursor al pasar por encima del sobre
    envelopeWrapper.style.cursor = 'pointer';

    // Función para abrir el sobre
    envelopeWrapper.addEventListener('click', () => {
        envelopeWrapper.classList.add('open');
    }, { once: true }); // El evento solo se dispara una vez

    // Evento para el botón "Sí"
    yesButton.addEventListener('click', () => {
        alert('¡Qué alegría! ¡Gracias por decir que sí, Belinda! ❤️ enviame esa respuesta al WhatsApp! espero tu respuesta beli');
        // Puedes añadir más lógica aquí, como redirigir a otra página,
        // mostrar una animación especial, etc.
    });

    // Evento para el botón "No"
    noButton.addEventListener('click', () => {
        alert('Oh... Entendido. Respeto tu decisión. 😔');
        // Aquí también podrías añadir lógica alternativa.
    });
});