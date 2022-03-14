// Desafio 1
function compareTrue(a, b) {
  if (a == true && b == true) {
    return true
  } else if (a == false) {
    return false
  } else if (b == false) {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  return base * height / 2;
}

// Desafio 3
function splitSentence(palavra) {
  let novaPalavra = palavra.split(' ');
  return novaPalavra
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
function encode(palavra) {
let palavra2 = '';
for (let index of palavra) {
  if (index == 'a') {
    index = 1;
  } else if (index == 'e') {
    index = 2;
  } else if (index == 'i') {
    index = 3;
  } else if (index == 'o') {
    index = 4;
  } else if (index == 'u') {
    index = 5;
  }
   palavra2 += index
} 
  return palavra2
}
function decode(palavra) {
  let palavra2 = '';
  for (let index of palavra) {
    if (index == '1') {
      index = 'a';
    } else if (index == '2') {
      index = 'e';
    } else if (index == '3') {
      index = 'i';
    } else if (index == '4') {
      index = 'o';
    } else if (index == '5') {
      index = 'u';
    }
     palavra2 += index
  } 
    return palavra2
  }

// Desafio 10
function techList(array, name) {
  let resultado = {};
  let resultado2 = [];
  array.sort();
  for (let i of array) {
    resultado['tech'] = i;
    resultado['name'] = name;
    resultado2.push(resultado)
    resultado = {};
   }
   
   return resultado2
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
