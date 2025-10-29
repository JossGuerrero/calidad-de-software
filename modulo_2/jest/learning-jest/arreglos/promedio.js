function calcularPromedio(numeros) {
    if (!Array.isArray(numeros) || numeros.length == 0)
        throw new TypeError('arreglo inválido');
    let prom = 0;
    for (let i = 0; i < numeros.length; i++) {
        prom += numeros[i];
    }
    return prom / numeros.length;
}
module.exports = { calcularPromedio };