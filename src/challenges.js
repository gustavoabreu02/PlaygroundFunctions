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
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
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
