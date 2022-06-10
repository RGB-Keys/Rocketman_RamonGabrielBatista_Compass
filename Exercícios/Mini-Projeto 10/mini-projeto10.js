// Mini-Projeto 10:
// Números Primos

//Criar função para mostrar os números primos

// Primos
// Compostos


ExibirNumerosPrimos(15);

function ExibirNumerosPrimos(limite) {
    for(let numero = 2; numero <= limite; numero++) {
        let primos = true;

        for (let divisor = 2; divisor < numero; divisor++) {
            if(numero % divisor === 0) {
                primos = false;
                break;
            }
        }
        if (primos) console.log(numero);
    }
}