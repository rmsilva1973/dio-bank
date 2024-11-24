import { soma, multiplica } from './soma';

describe(('Soma'), () => {
    it('deve somar um ao número passado', () => {
        const value = soma(1)
        expect(value).toBe(2);
    })

    it('deve multiplicar o número por dois', () => {
        const value = multiplica(2,2)
        expect(value).toBe(4);
    })

    it('deve multiplicar o número por três', () => {
        const value = multiplica(2,3)
        expect(value).toBe(6);
    })
    
    it('deve dar erro com multiplicar diferente de 2 ou 3', () => {
        expect(() => {
            multiplica(2,4)
        }).toThrow('Multiplicador inválido');
    })

});