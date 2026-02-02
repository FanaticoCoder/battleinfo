var numberQ = Math.floor(Math.random() * 2);
var listeQ = [];
var totalParaEscrever = 1 + cartas.length;
var escritos = 0;

function dialoging(valor, pontoDialogo, delay) {
  var time1 = 0;
  var space = '';
  escritos=0
  pontoDialogo.textContent = '';
  setTimeout(() => {
    let time0 = setInterval(() => {
      if (time1 < valor.length) {
        space += valor[time1];
        time1++;
        pontoDialogo.textContent = space;
      } else {
        clearInterval(time0);
        escritos++
      }
    }, 60);
  }, delay)
};

let n = Math.floor(Math.random() * questions.length);
let repet = false;
for (let i = 0; i < listeQ.length; i++) {
  if (listeQ[i] === n) {
    repet = true;
    break;
  }
}
if (!repet) {
  numberQ = n;
  listeQ.push(numberQ);
};

let delay = 0;

dialoging(questions[numberQ], dialogoBox);

for (let i = 0; i < cartas.length; i++) {
  cartas[i].textContent = '';
  dialoging(respostas[numberQ][i][0], cartas[i], delay);
  delay += respostas[numberQ][i][0].length * 100 + 500;
};

for (let i = 0; i < cartas.length; i++) {
  cartas[i].addEventListener('touchstart', () => {
    if (escritos === totalParaEscrever) {
      for (let a = 0; a < actionButton.length; a++) {
        if (actionButton[a].style.backgroundColor !== 'rgb(87, 89, 114)') {
          if (respostas[numberQ][i][1] === true) {
            RespostaTrueOrFalse('Winner!!!');
          } else {
            RespostaTrueOrFalse('Loser');
          }
          let p = document.querySelectorAll('.trueOrFalse');
          for (let i = 0; i < p.length; i++) {
            if (p.length > 1) {
              p[i].remove();
            }
          }
          setTimeout(() => {
            for (let i = 0; i < p.length; i++) {
              p[i].remove();
            }
          }, 1300)
        }
      }
    } else {
      alert('Aguarde o carregamento das respostas... 😤')
    }
  });
  cartas[i].addEventListener('touchend', () => {
    let buttonAtivo = false;
    if (escritos === totalParaEscrever) {
      for (let a = 0; a < actionButton.length; a++) {
        if (actionButton[a].style.backgroundColor !== 'rgb(87, 89, 114)') { buttonAtivo = true; }
      };
      if (buttonAtivo) {
        // pega todas as questões que ainda não foram sorteadas
        let restantes = questions
          .map((q, idx) => idx)
          .filter(idx => !listeQ.includes(idx));
        
        if (restantes.length === 0) {
          // todas já foram usadas
          console.log("Acabaram as questões!");
          return;
        }
        
        // sorteia uma das restantes
        let n = restantes[Math.floor(Math.random() * restantes.length)];
        
        numberQ = n;
        listeQ.push(numberQ);
        
        let delay = 0;
        
        dialoging(questions[numberQ], dialogoBox);
        
        for (let j = 0; j < cartas.length; j++) {
          cartas[j].textContent = '';
          dialoging(respostas[numberQ][j][0], cartas[j], delay);
          delay += respostas[numberQ][j][0].length * 100 + 500;
        }
      } else { alert('Escolha uma ação: \nAtaque⚔️ ou Defesa🛡️') }
    }
    for (let i = 0; i < actionButton.length; i++) {
      actionButton[i].style.backgroundColor = 'rgb(87, 89, 114)'
    };
  });
};

setInterval(() => {
  console.log(escritos)
}, 0)
