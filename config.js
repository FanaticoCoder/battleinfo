var dialogoBox = document.querySelector('.dialogoBox');
var tela = document.querySelector('.tela');

var cartas = [];
var questions = [
  'Questao de número um, qual a cor do céu?',
  'Qual a composição química da água?',
  'Qual o ano em que estamos hoje?',
  'No filme até que a sorte nos separe. foi filmado em qual país?',
  'Qual o filme retrata um menino das estrelas e sua amiga rosa?'
];
var respostas = [
  [
    ['azul', true],
    ['verde', false],
    ['vermelho', false],
    ['amarelo', false]
  ],
  [
    ['NaCl', false],
    ['HCl', false],
    ['H2O', true],
    ['CH4', false]
  ],
  [
    ['estamos em 2021', false],
    ['estamos em 2040', false],
    ['estamos em 2026', true],
    ['estamos em 2017', false]
  ],
  [
    ['Brasil', true],
    ['Estados Unidos', false],
    ['China', false],
    ['Coreia do Sul', false]
  ],
  [
    ['Os minios 2', false],
    ['It a coisa', false],
    ['A noiva cadaver', false],
    ['O pequeno principe', true]
  ]
];

var time0;
var mvX = 0;
var mvY = 150;

for (var i = 0; i <= 3; i++) {
  let carta = document.createElement('div');
  carta.className = 'carta';
  document.body.appendChild(carta);
  cartas.push(carta);
};

cartas[0].style.left = cartas[0].offsetLeft + mvX + 'px';
cartas[0].style.top = cartas[0].offsetTop + mvY + 'px';

cartas[1].style.left = cartas[1].offsetLeft + 450 + mvX + 'px';
cartas[1].style.top = cartas[1].offsetTop + mvY + 'px';

cartas[2].style.left = cartas[2].offsetLeft + mvX + 'px';
cartas[2].style.top = cartas[2].offsetTop + 525 + mvY + 'px';

cartas[3].style.left = cartas[3].offsetLeft + 450 + mvX + 'px';
cartas[3].style.top = cartas[3].offsetTop + 525 + mvY + 'px';

function RespostaTrueOrFalse(resposta) {
  var trueOrFalse = document.createElement('p');
  trueOrFalse.className = 'trueOrFalse';
  document.body.appendChild(trueOrFalse);
  trueOrFalse.textContent = resposta;
}