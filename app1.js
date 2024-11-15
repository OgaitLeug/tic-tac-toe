let tabuleiro = [0, 0, 0, 0, 0, 0, 0, 0, 0];
let quem_joga = "X";
let turno = document.getElementById("jogada");
let view_vez = document.querySelector("#view_vez");
let frase = document.querySelector(".frase");
let jogo_ativo = true; // Variável para controlar o estado do jogo

document.querySelectorAll('[id^="img"]').forEach((img) => {
  img.addEventListener("click", (img) => {
    let indice = img.target.id.substring(3);
    if (jogo_ativo) {
      // Verifica se o jogo ainda está ativo
      ver_jogada();
      colocar_simbolo(indice);
      check_vitoria_x();
      check_vitoria_o();
    }
  });
});

function colocar_simbolo(indice) {
  if (tabuleiro[indice] != 0) return;

  document
    .querySelector("#img" + indice)
    .setAttribute("src", "imagens/" + quem_joga + ".png");

  if (quem_joga == "X") {
    tabuleiro[indice] = 1;
    quem_joga = "O";
  } else if (quem_joga == "O") {
    tabuleiro[indice] = 2;
    quem_joga = "X";
  }
}

function ver_jogada() {
  if (quem_joga == "X") {
    view_vez.innerHTML = "O";
    view_vez.style.color = "#f19f41";
  } else if (quem_joga == "O") {
    view_vez.innerHTML = "X";
    view_vez.style.color = "#9e2521";
  }
}

function check_vitoria_o() {
  if (
    (tabuleiro[0] == 2 && tabuleiro[3] == 2 && tabuleiro[6] == 2) ||
    (tabuleiro[1] == 2 && tabuleiro[4] == 2 && tabuleiro[7] == 2) ||
    (tabuleiro[2] == 2 && tabuleiro[5] == 2 && tabuleiro[8] == 2) ||
    (tabuleiro[0] == 2 && tabuleiro[4] == 2 && tabuleiro[8] == 2) ||
    (tabuleiro[2] == 2 && tabuleiro[4] == 2 && tabuleiro[6] == 2) ||
    (tabuleiro[0] == 2 && tabuleiro[1] == 2 && tabuleiro[2] == 2) ||
    (tabuleiro[3] == 2 && tabuleiro[4] == 2 && tabuleiro[5] == 2) ||
    (tabuleiro[6] == 2 && tabuleiro[7] == 2 && tabuleiro[8] == 2)
  ) {
    document.getElementById("win").style.opacity = 1;
    frase.parentNode.removeChild(frase);
    jogo_ativo = false; // Define o jogo como inativo
    return;
  }
}

function check_vitoria_x() {
  if (
    (tabuleiro[0] == 1 && tabuleiro[3] == 1 && tabuleiro[6] == 1) ||
    (tabuleiro[1] == 1 && tabuleiro[4] == 1 && tabuleiro[7] == 1) ||
    (tabuleiro[2] == 1 && tabuleiro[5] == 1 && tabuleiro[8] == 1) ||
    (tabuleiro[0] == 1 && tabuleiro[4] == 1 && tabuleiro[8] == 1) ||
    (tabuleiro[2] == 1 && tabuleiro[4] == 1 && tabuleiro[6] == 1) ||
    (tabuleiro[0] == 1 && tabuleiro[1] == 1 && tabuleiro[2] == 1) ||
    (tabuleiro[3] == 1 && tabuleiro[4] == 1 && tabuleiro[5] == 1) ||
    (tabuleiro[6] == 1 && tabuleiro[7] == 1 && tabuleiro[8] == 1)
  ) {
    document.getElementById("win").style.opacity = 1;
    frase.parentNode.removeChild(frase);
    jogo_ativo = false; // Define o jogo como inativo
    return;
  }
}
