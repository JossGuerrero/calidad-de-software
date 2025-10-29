function obtenerEdadesMaximas(edades) {
    if (!Array.isArray(edades) || edades.length === 0)
        throw new TypeError('Arreglo invalido');

    let mayor = edades[0];

    for (let i = 1; i < edades.length; i++) {
        if (edades[i] > mayor) {
            mayor = edades[i];
        }
    }

    return edades.filter(edad => edad === mayor);
}

module.exports = obtenerEdadesMaximas;