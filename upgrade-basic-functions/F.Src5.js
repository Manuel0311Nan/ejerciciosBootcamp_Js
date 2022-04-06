// Crea una función que reciba por  parámetro un array
// Cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume.


// solución: Si el valor que itera es un string recoge su longitud y lo introduce en l variable sumWords
// si es un numero suma el numero a la variabel sumwords directamente.
// por último recoge el valor completo y lo divide entre el numero de elementos.
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(param) {
    let sumWords = 0;
    for (let i = 0; i < param.length; i++) {
        if (typeof param[i] === "string") {
            sumWords += param[i].length;
        } else {
            sumWords += param[i]
        }

    }
    return console.log(sumWords / param.length)
}
averageWord(mixedElements)