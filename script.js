function actualizarReloj() {
    const reloj = document.getElementById('contenedor');
    const ahora = new Date();

    let horas = ahora.getHours();
    const minutos = String(ahora.getMinutes()).padStart(2, '0');
    const segundos = String(ahora.getSeconds()).padStart(2, '0');

    // Convertir de formato 24 horas a 12 horas
    const amPm = horas >= 12 ? 'PM' : 'AM';
    horas = horas % 12 || 12;  // Si horas es 0, cambiar a 12

    // Mostrar la hora en formato 12 horas
    contenedor.textContent = `${horas}:${minutos}:${segundos} ${amPm}`;
}

// Actualizar el reloj cada segundo
setInterval(actualizarReloj, 1000);
actualizarReloj();  // Llama a la función una vez al cargar la página
