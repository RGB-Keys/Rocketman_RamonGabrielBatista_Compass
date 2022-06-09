import assert from 'assert'
import chai, { expect } from 'chai'

describe('Meu primeiro teste', () => {
    it('Verificar a variável "aux"', () => {
        let aux = 2
        expect(aux).to.be.equals(2).and.to.be.a('number')
    })
    it('Verificar uma outra variável "aux"', () => {
        let aux = 'carro'
        expect(aux).to.be.equals('carro').and.to.be.a('string').and.not.equals('charrete')
    })
})

describe('Meu segundo teste', () => {
    it('Verificar uma desigualdade', () => {
        let sonho = 'Chevette'
        expect(sonho).not.to.be.equals('Camaro')
    })
    it('Verificar a superioridade do Chevette perante o Camaro', () => {
        let realidade = 'barato'
        expect(realidade).not.to.be.equals('caro')
    })
})