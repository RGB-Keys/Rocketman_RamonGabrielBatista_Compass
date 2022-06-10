// Mini-Projeto 6
// Encontre o String

// Criar um método para ler propriedades de um objeto e
// exibir somente as propriedades do tipo string que estão nesse objeto



boletim = {
    aluno: 'João',
    nota: 8,
    professor: 'Mário',
    disciplina: 'Matemática',
    aprovado: true
}

exibirPropriedade(boletim);
function exibirPropriedade(obj) {
    for (prop in obj)
        if(typeof obj[prop] === 'string')
            console.log(prop,obj[prop])
}