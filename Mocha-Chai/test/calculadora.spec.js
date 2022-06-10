import assert from 'assert'
import chai, { expect } from 'chai'
import Calculadora from '../src/Calculadora.js'


describe('Testes de soma', () => {
    it('Deve somar 4 e 5 resultando em 9', () => {
        let resultado = Calculadora.soma(4, 5)
        expect(resultado).to.be.eq(9)
    })
    it('Deve somar -4 e 5 resultando em 1', () => {
        let resultado = Calculadora.soma(-4, 5)
        expect(resultado).to.be.eq(1)
    })
})

describe('Testes de subtração', () => {
    it('Deve subtrair 4 e 5 resultando em -1', () => {
        let resultado = Calculadora.sub(4, 5)
        expect(resultado).to.be.eq(-1)
    })
    it('Deve subtrair 50 e 10 resultando em 40', () => {
        let resultado = Calculadora.sub(50, 10)
        expect(resultado).to.be.eq(40)
    })
})

describe('Testes de multiplicação', () => {
    it('Deve multiplicar 6 e 5 resultando em 30', () => {
        let resultado = Calculadora.multi(6, 5)
        expect(resultado).to.be.eq(30)
    })
    it('Deve multiplicar 10 e 50 resultando em 500', () => {
        let resultado = Calculadora.multi(10, 50)
        expect(resultado).to.be.eq(500)
    })
})

describe('Testes de divisão', () => {
    it('Deve dividir 10 e 5 resultando em 2', () => {
        let resultado = Calculadora.div(10, 5)
        expect(resultado).to.be.eq(2)
    })
    it('Deve dividir 80 e 4 resultando em 20', () => {
        let resultado = Calculadora.div(80, 4)
        expect(resultado).to.be.eq(20)
    })
})