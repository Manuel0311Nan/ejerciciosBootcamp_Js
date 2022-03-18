//Iteracción 1
function sum(numberOne, numberTwo) {
    if (numberOne > numberTwo) {
        console.log(numberOne)
    } else {
        console.log(numberTwo)
    }
}
sum(6, 8);


function sum2(numberOne, numberTwo) {
    numberOne > numberTwo ? console.log(numberOne) : console.log(numberTwo);
}

sum2(12, 8)