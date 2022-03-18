// Desafio 11
function generatePhoneNumber(numero) {
  let resultado = '';
  let repete = 0;
  if (numero.length > 11 || numero.length < 11) {
    return "Array com tamanho incorreto."
  }
for (let i of numero) {
  if (repete == 2 || repete == 1) {
    repete = 0
  } else if (repete >= 3) {
    return "não é possível gerar um número de telefone com esses valores"
    repete = 0
  }
  for (let i2 = 0; i2 < numero.length; i2 += 1) {
    if (i == numero[i2]) {
      repete += 1;
    }
  }
} 
for (let i in numero) {
  if (numero[i] < 0 || numero[i] > 9) {
    return "não é possível gerar um número de telefone com esses valores"
  }
  if (i == 0) {
    resultado = '('
    resultado += numero[i]
  }
  if (i == 1) {
    resultado += numero[i]
    resultado += ')'
  }
  if (i == 2) {
    resultado += ' '
    resultado += numero[i]
    for (let i = 3; i < 6; i += 1) {
      resultado += numero[i]
    }
  }
  if (i == 6) {
    resultado += numero[i]
    resultado += '-'
    for (let i = 7; i < 11; i += 1) {
      resultado += numero[i]
    }
  }
} 
return resultado
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
let a = Math.abs(lineA)
let b = Math.abs(lineB)
let c = Math.abs(lineC)

if (lineA + lineB > lineC && lineC + lineB > lineA && lineA + lineC > lineB && a - b - c < a && a - b - c < b && a - b - c < c ) {
    return true
} else {
    return false
}

  
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
