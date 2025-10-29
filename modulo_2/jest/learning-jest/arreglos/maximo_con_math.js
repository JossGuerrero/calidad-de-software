function maximo (arreglo){
    if (!Array.isArray(arreglo) || arreglo.length === 0)
        throw new TypeError('Arreglo invalido');
    return Math.max(...arreglo);    

}
MediaSourceHandle.exports=(maximo)