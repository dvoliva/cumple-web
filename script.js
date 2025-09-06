function actualizarContador() {
    const ahora = new Date();
    const fechaObjetivo = new Date('October 25, 2025 00:00:00');
    const tiempoRestante = fechaObjetivo.getTime() - ahora.getTime();

    if (tiempoRestante <= 0) {
        document.getElementById('contador').innerText = "¡Feliz Cumpleaños Isi! 🎈🎁";
        return;
    }

    const segundosTotales = Math.floor(tiempoRestante / 1000);

    const segundosEnUnaSemana = 60 * 60 * 24 * 7;
    const segundosEnUnDia = 60 * 60 * 24;
    const segundosEnUnaHora = 60 * 60;
    const segundosEnUnMinuto = 60;

    const semanas = Math.floor(segundosTotales / segundosEnUnaSemana);
    const dias = Math.floor((segundosTotales % segundosEnUnaSemana) / segundosEnUnDia);
    const horas = Math.floor((segundosTotales % segundosEnUnDia) / segundosEnUnaHora);
    const minutos = Math.floor((segundosTotales % segundosEnUnaHora) / segundosEnUnMinuto);
    const segundos = Math.floor(segundosTotales % segundosEnUnMinuto);

    const texto = `Faltan:\n${semanas} semanas\n${dias} días\n${horas} horas\n${minutos} minutos\n${segundos} segundos`;
    document.getElementById('contador').innerText = texto;
}

// Actualizar el contador cada segundo
setInterval(actualizarContador, 1000);

// Llamar a la función una vez al inicio para que se muestre inmediatamente
actualizarContador();