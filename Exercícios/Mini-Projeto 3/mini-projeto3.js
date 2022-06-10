// Mini-Projeto 3:
// Fizzbuzz

// Divísivel por 3 => Fizz
// Divísivel por 5 => Buzz
// Divísivel por 3 e 5 => FizzBuzz
// Não Divísivel por 3 ou 5 => entrada
// Não é um número => 'Não é um número'


//Constante
const resultado = fizzBuzz(15);
console.log(resultado)

//Função
function fizzBuzz(entrada){
    if (typeof entrada !== 'number')
        return 'Não é um número';
    if (entrada % 3 === 0 && entrada % 5 === 0)
        return 'FizzBuzz';
    if (entrada % 3 === 0)
        return 'Fizz';
    if (entrada % 5 === 0)
        return 'Buzz';
    return entrada;
}
