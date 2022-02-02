const button = document.querySelector('button');
let main = document.querySelector('main');
let cartas = [
  { numero: 1, nome: 'bobrossparrot' },
  { numero: 2, nome: 'bobrossparrot' },
  { numero: 3, nome: 'explodyparrot' },
  { numero: 4, nome: 'explodyparrot' },
  { numero: 5, nome: 'fiestaparrot' },
  { numero: 6, nome: 'fiestaparrot' },
  { numero: 7, nome: 'metalparrot' },
  { numero: 8, nome: 'metalparrot' },
  { numero: 9, nome: 'revertitparrot' },
  { numero: 10, nome: 'revertitparrot' },
  { numero: 11, nome: 'tripletsparrot' },
  { numero: 12, nome: 'tripletsparrot' },
  { numero: 13, nome: 'unicornparrot' },
  { numero: 14, nome: 'unicornparrot' }
];
let cartasSelecionadas = [];
let qtdCartas = 0;

function escolherQtdDeCartas() {
  qtdCartas = prompt(
    'Bem vindo ao Parrot Card Game! Escolha o úmero de cartas: \n Escolha um número par entre 4 e 14'
  );
}

button.onclick = function iniciarJogo() {
  escolherQtdDeCartas();
  while (qtdCartas < 4 || qtdCartas % 2 !== 0 || qtdCartas > 14) {
    alert('Escolha um número par entre 4 e 14');
    escolherQtdDeCartas();
  }
  pegarInfoCartas();
  criarCartas();
  habilitarJogo();
};

function criarCartas() {
  for (let i = 0; i < cartasSelecionadas.length; i++) {
    main.innerHTML +=
      `<div onclick='virarCarta(this)' class='carta'><div class='front-face'><img src='./assets/${cartasSelecionadas[i].nome}.gif' alt=''></div>` +
      "<div class='back-face'> <img src='./assets/back.png' alt=''></div></div>";
  }
}

function habilitarJogo() {
  main.classList.add('ativo');
  button.classList.add('inativo');
}

function pegarInfoCartas() {
  for (let i = 0; i < qtdCartas; i++) {
    let cartaSelecionada = cartas[i];
    cartasSelecionadas.push(cartaSelecionada);
  }
  embaralharCartas();
}

function embaralharCartas() {
  cartasSelecionadas.sort(comparador);
}

function comparador() {
  return Math.random() - 0.5;
}

function virarCarta(carta) {
  console.log(carta);
  const backFace = carta.querySelector('.back-face');
  backFace.classList.add('rotate');
  const frontFace = carta.querySelector('.front-face');
  frontFace.classList.add('rotate');
}

let teste = '';
