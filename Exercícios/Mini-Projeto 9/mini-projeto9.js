// Mini-Projeto 9:
// Contador de Asteríscos

// Criar uma função que exibe a quantidade de *
// que aquela linha possui


exibirAsteriscos(10);

function exibirAsteriscos(linhas) {
    for(let linha = 1; linha <= linhas; linha++) {
        let padrao = '';
        for(let i = 0; i < linha; i++) {
            padrao += '*';
        }
        console.log(padrao);
    }
}