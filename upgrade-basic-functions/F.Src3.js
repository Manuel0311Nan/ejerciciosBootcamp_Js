// Implemente la función sumNumbers
// que toma un array de números como argumento
// devolviendo la suma de todos los números de la matriz

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(array) {
    let sumNumbers = 0;
    for (let i = 0; i < array.length; i++) {
        sumNumbers += array[i];

    }
    return console.log(sumNumbers)
}
sumAll(numbers)