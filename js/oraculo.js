const cartas = [
  "../fotos/hecate.jpeg",
  "../fotos/lakshmi.jpeg",
  "../fotos/artemis.jpeg",
  "../fotos/persefone.jpeg",
  "../fotos/demeter.jpeg",
  "../fotos/kali.jpeg",
  "../fotos/hestia.jpeg",
  "../fotos/afrodite.jpeg",
  "../fotos/atena.jpeg",
  "../fotos/baco.jpeg",
];

function virarCarta() {
  const imagemAleatoria = cartas[Math.floor(Math.random() * cartas.length)];

  document.getElementById("imagem-inicial").style.display = "none";

  const cartaImg = document.getElementById("carta-sorteada");
  cartaImg.src = imagemAleatoria;
  cartaImg.style.display = "block";

  document.getElementById("btn-reiniciar").style.display = "inline-block";
}

function reiniciar() {
  document.getElementById("imagem-inicial").style.display = "block";
  document.getElementById("carta-sorteada").style.display = "none";
  document.getElementById("btn-reiniciar").style.display = "none";
}
