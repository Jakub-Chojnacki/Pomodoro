let x = document.getElementById('main');
const guzik = document.getElementById('guzik');

function main() {
  x.setAttribute('value', '8');
}

guzik.addEventListener("click", main);