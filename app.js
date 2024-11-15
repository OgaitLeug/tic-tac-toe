let tabuleiro = [0, 0, 0, 0, 0, 0, 0, 0, 0];

let quem_joga = "X";

let turno = document.getElementById("jogada");

let view_vez = document.querySelector("#view_vez");

let frase = document.querySelector(".frase");

document.querySelectorAll('[id^="img"]').forEach((img) => {
  img.addEventListener("click", (img) => {
    let indice = img.target.id.substring(3);

    ver_jogada();
    colocar_simbolo(indice);

    check_vitoria_x();
    check_vitoria_o();
  });
});

// Como colocar imagem e determinar a vez de quem joga
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
// funcoes para determinar vitoria ...

function check_vitoria_o() {
  //colunas
  if (
    (tabuleiro[0] == 2 && tabuleiro[3] == 2 && tabuleiro[6] == 2) ||
    (tabuleiro[1] == 2 && tabuleiro[4] == 2 && tabuleiro[7] == 2) ||
    (tabuleiro[2] == 2 && tabuleiro[5] == 2 && tabuleiro[8] == 2) ||
    //diagonal
    (tabuleiro[0] == 2 && tabuleiro[4] == 2 && tabuleiro[8] == 2) ||
    (tabuleiro[2] == 2 && tabuleiro[4] == 2 && tabuleiro[6] == 2) ||
    //linhas
    (tabuleiro[0] == 2 && tabuleiro[1] == 2 && tabuleiro[2] == 2) ||
    (tabuleiro[3] == 2 && tabuleiro[4] == 2 && tabuleiro[5] == 2) ||
    (tabuleiro[6] == 2 && tabuleiro[7] == 2 && tabuleiro[8] == 2)
  ) {
    document.getElementById("win").innerText = "Vencedor : O";
    document.getElementById("win").classList.add("wino");
    frase.parentNode.removeChild(frase);
    document.querySelector("container").classList.add("d-none");
    return;
  }
}
function check_vitoria_x() {
  //colunas
  if (
    (tabuleiro[0] == 1 && tabuleiro[3] == 1 && tabuleiro[6] == 1) ||
    (tabuleiro[1] == 1 && tabuleiro[4] == 1 && tabuleiro[7] == 1) ||
    (tabuleiro[2] == 1 && tabuleiro[5] == 1 && tabuleiro[8] == 1) ||
    //diagonal
    (tabuleiro[0] == 1 && tabuleiro[4] == 1 && tabuleiro[8] == 1) ||
    (tabuleiro[2] == 1 && tabuleiro[4] == 1 && tabuleiro[6] == 1) ||
    //linhas
    (tabuleiro[0] == 1 && tabuleiro[1] == 1 && tabuleiro[2] == 1) ||
    (tabuleiro[3] == 1 && tabuleiro[4] == 1 && tabuleiro[5] == 1) ||
    (tabuleiro[6] == 1 && tabuleiro[7] == 1 && tabuleiro[8] == 1)
  ) {
    document.getElementById("win").innerText = "Vencedor : X";
    document.getElementById("win").classList.add("winx");
    frase.parentNode.removeChild(frase);
    document.querySelector("container").classList.add("d-none");
    return;
  }
}
