// Desafio 1
function compareTrue() {
  
}

// Desafio 2
function calcArea(base, height) {
  return base * height / 2;
}

// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName(array) {
  let numb1 = array[0];
  let numb2 = array[array.length -1];
  return numb2 + ', ' + numb1

}

// Desafio 5
function footballPoints(wins, ties) {
  wins = wins * 3
  ties = ties * 1
  return wins + ties
}

// Desafio 6
function highestCount(numbers) {
let maiorNumber = numbers[0];
let resultado = 0;
 for (let contador = 0; contador < numbers.length; contador += 1) {
  if (numbers[contador] > maiorNumber) {
    maiorNumber = numbers[contador];
  }
 }
 for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] == maiorNumber) {
    resultado += 1
  }
 }
 return resultado
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  mouse += 1;
  cat1 += 1;
  cat2 += 1;
  let distan1 = cat1 - mouse;
  let distan2 = cat2 - mouse;
  if (Math.abs(distan1) < Math.abs(distan2)) {
    return 'cat1';
  } else if (Math.abs(distan2) < Math.abs(distan1)) {
    return 'cat2';
  } else if (Math.abs(distan1) == Math.abs(distan2)) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let param = [];
for (let i = 0; i < array.length; i += 1 ) {
    if (array[i] % 3 == 0 && array[i] % 5 == 0) {
    param.push('fizzBuzz')  
  } else if (array[i] % 3 == 0) {
    param.push('fizz')
  } else if (array[i] % 5 == 0) {
    param.push('buzz')
  } else {
    param.push('bug!')
  }
} return param
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
