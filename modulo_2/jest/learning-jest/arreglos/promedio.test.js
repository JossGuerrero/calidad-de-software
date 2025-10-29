const(promedio)=require('./promedio');
describe('Calcular Promedio', () => {
    test('Happy path: promedio es 10', () => {
        expect(calcularPromedio([10])).toBe(10);
    });
    test('Happy path: promedio es 5', () => {
        expect(calcularPromedio([5])).toBe(5);
    });
    test('Bad path: arreglo invalido', () => {
        expect(() => calcularPromedio([])).toThrow('arreglo inválido');
        expect(() => calcularPromedio('hola')).toThrow('arreglo inválido');
    });
});