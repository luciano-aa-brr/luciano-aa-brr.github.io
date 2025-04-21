//contador de visitas
let contador = localStorage.getItem('contador-visitas');

if (!contador) {
    contador = 0;
}

contador++;

localStorage.setItem('contador-visitas', contador);

document.getElementById('contador').innerText = contador;