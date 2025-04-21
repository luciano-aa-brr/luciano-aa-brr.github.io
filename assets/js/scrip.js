//contador de visitas
let contador = localStorage.getItem('contador-visitas');

if (!contador) {
    contador = 0;
}
contador++;

localStorage.setItem('contador-visitas', contador);
document.getElementById('contador').innerText = contador;

//mensaje personalizado 
const ahora = new Date();
const hora = ahora.getHours();
let mensaje;

if (hora >= 5 && hora < 12) {
    mensaje = "¡Buenos días!";
} else if (hora >= 12 && hora < 18) {
    mensaje = "¡Buenas tardes!";
} else if (hora >= 18 && hora < 22) {
    mensaje = "¡Buenas noches!";
} else {
    mensaje = "Es tarde, pero gracias por estar aquí. ";
}

document.getElementById('mensaje-bienvenida').innerText = mensaje;