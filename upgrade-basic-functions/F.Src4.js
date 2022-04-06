// Calcular el promedio de un array

const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(param) {
    let aver = 0;
    for (let i = 0; i < param.length; i++) {
        aver += param[i]
    }
    return console.log(aver / param.length)
}
average(numbers)