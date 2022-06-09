import assert from 'assert'

describe('Meu primeiro teste', () => {
    it('Verificar uma igualdade', () => {
        let aux = 2
        assert.strictEqual(aux, 2)
    })
    it('Verificar uma outra igualdade', () => {
        let aux = 'carro'
        assert.strictEqual(aux, 'carro')
    })
})

describe('Meu segundo teste', () => {
    it('Verificar uma desigualdade', () => {
        let aux = 2
        assert.notStrictEqual(aux, '2')
    })
    it('Verificar uma outra desigualdade', () => {
        let aux = 'Camaro'
        assert.notStrictEqual(aux, 'Chevette')
    })
})