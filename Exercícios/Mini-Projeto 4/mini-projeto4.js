// Mini-Projeto 3:
//Medidor de Velocidade

// Velocidade Máxima até 70
// A cada 5km acima do limite você ganha 1 ponto
// Math.floor() --> Arredondamento --> Real para Inteiro
// Caso pontos for maior que 12 --> "Carteira Suspendida"


verificarVelocidade(125)

function verificarVelocidade(velocidade) {
    const velocidadeMaxima = 70;
    const kmPorPontos = 5;
    const limiteDePontos = 12;

    if (velocidade <= velocidadeMaxima)
        console.log('Ok');
     else {
        const pontos = Math.floor((velocidade - velocidadeMaxima) / kmPorPontos);
        if (pontos >= limiteDePontos)
            console.log('Carteira Suspensa!');
        else
            console.log('Pontos na Carteira:',pontos) 
     }
}
