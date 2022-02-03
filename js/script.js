const botao = document.querySelector('button');
const main = document.querySelector('main');
let contadorPrimeiraCarta = 2;
let paresVirados = 0;
let primeiraCarta;
let segundaCarta;
let backFace;
let frontFace;
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
let paresCriados;

function escolherQtdDeCartas() {
  qtdCartas = prompt(
    'Bem vindo ao Parrot Card Game! Escolha o úmero de cartas: \n Escolha um número par entre 4 e 14'
  );
}

botao.onclick = function iniciarJogo() {
  escolherQtdDeCartas();
  while (qtdCartas < 4 || qtdCartas % 2 !== 0 || qtdCartas > 14) {
    alert('Escolha um número par entre 4 e 14');
    escolherQtdDeCartas();
  }
  paresCriados = qtdCartas / 2;
  pegarInfoCartas();
  criarCartas();
  habilitarJogo();
};

function criarCartas() {
  for (let i = 0; i < cartasSelecionadas.length; i++) {
    main.innerHTML +=
      `<div onclick='virarCarta(this)' class='carta ${cartasSelecionadas[i].nome}'><div class='front-face'><img src='./assets/${cartasSelecionadas[i].nome}.gif' alt=''></div>` +
      "<div class='back-face'><img src='./assets/back.png' alt=''></div></div>";
  }
}

function habilitarJogo() {
  main.classList.add('ativo');
  botao.classList.add('inativo');
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
  // console.log(carta);
  backFace = carta.querySelector('.back-face');
  backFace.classList.add('girar');
  frontFace = carta.querySelector('.front-face');
  frontFace.classList.add('girar');
  validarPrimeiraOuSegundaCarta(carta);
   
  
}

function validarPrimeiraOuSegundaCarta(carta) {
  if (contadorPrimeiraCarta % 2 === 0) {
    // console.log('contador primeira carta:', contadorPrimeiraCarta)
    validarPrimeiraCarta(carta)
  
  } else if (contadorPrimeiraCarta % 2 !== 0) {
    // console.log('entrou')
    
    validarSegundaCarta(carta)
    
    if (primeiraCarta.classList[1] === segundaCarta.classList[1]) {
      setTimeout(validarPar, 500)

    } else {
      setTimeout(naoValidarPar, 1000);

    }
  }
}


function naoValidarPar(){
      primeiraCarta.firstChild.classList.remove('girar');
      primeiraCarta.lastChild.classList.remove('girar')
      segundaCarta.firstChild.classList.remove('girar')
      segundaCarta.lastChild.classList.remove('girar');
      desbloquearClique();
      primeiraCarta = null;
      segundaCarta = null;
}

function validarPar(){
    paresVirados++; 
    console.log('pares virados:', paresVirados);
    desbloquearClique();
    primeiraCarta.classList.add('achou');
    segundaCarta.classList.add('achou');
    primeiraCarta = null; 
    segundaCarta = null;
    acabarJogo()
}

function validarPrimeiraCarta(carta){
    primeiraCarta = carta;
    contadorPrimeiraCarta++;
    primeiraCarta.classList.add('desabilitado');
   
}

function validarSegundaCarta(carta){
    segundaCarta = carta;
    contadorPrimeiraCarta++;
    bloquearClique()
    
    
}
function acabarJogo() {
  if (paresVirados / paresCriados === 1){
    alert(`Parabéns, você ganhou em ${(contadorPrimeiraCarta - 2)/2} jogadas`)
    let resposta =  prompt('Gostaria de jogar mais?\nSe sim, digite:"Sim"')
    if(resposta.toLocaleLowerCase() === 'sim')  {
      window.location.reload()
    }
    else{

    }
  }
}


function bloquearClique(){
  const todasAsCartasNoJogo = document.querySelectorAll('.carta');
  for(let i = 0; i < todasAsCartasNoJogo.length; i++){  
    todasAsCartasNoJogo[i].classList.add('desabilitado');
  }
} 

function desbloquearClique(){
  const todasAsCartasNoJogo = document.querySelectorAll('.carta');
  for(let i = 0; i < todasAsCartasNoJogo.length; i++){  
    todasAsCartasNoJogo[i].classList.remove('desabilitado');
    
  }
}

