const obtenerEdadesMaximas = require('./obtenerEdadesValidas7');

describe('Obtener Edades Máximas', () => {

    test('Debe devolver un arreglo con la edad máxima única', () => {
        expect(obtenerEdadesMaximas([10, 45, 22, 50, 18])).toEqual([50]);
    });

    test('Debe devolver un arreglo con todas las ocurrencias de la edad máxima', () => {
        expect(obtenerEdadesMaximas([30, 99, 15, 99, 50])).toEqual([99, 99]);
    });

    test('Debe manejar un arreglo con un solo elemento', () => {
        expect(obtenerEdadesMaximas([42])).toEqual([42]);
    });

    test('Debe manejar edades negativas si el arreglo las contiene', () => {
        expect(obtenerEdadesMaximas([-10, -5, -20, -5])).toEqual([-5, -5]);
    });

    test('Sad path: Debe lanzar TypeError para arreglo vacío', () => {
        expect(() => obtenerEdadesMaximas([])).toThrow('Arreglo invalido');
    });

    test('Sad path: Debe lanzar TypeError para entrada no array', () => {
        expect(() => obtenerEdadesMaximas('texto')).toThrow('Arreglo invalido');
        expect(() => obtenerEdadesMaximas(null)).toThrow('Arreglo invalido');
    });
});