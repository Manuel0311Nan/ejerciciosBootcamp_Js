//Bucles 1
// 1.1 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola.
for (let index = 0; index < 10; index++) {
    console.log(index);
}

//bucles 2
// 1.2 Crea un bucle for que vaya desde 0 a 9 y muestralo por consola solo
// cuando el resto del o dividido entre 2 sea 0.

for (index = 0; index < 10; index++) {
    if (index % 2 == 0) {
        console.log(index);
    }
}

//bucles 3
// 1.3 Crea un bucle para conseguir dormir contando ovejas.
// Este bucle empieza en 0 y termina en 10.
// Muestra por consola un mensaje diciendo 'Intentando dormir' en cada vuelta del bucle
// y cambia el mensaje en la última vuelta a 'Dormido!'.

for (index = 0; index < 11; index++) {
    if (index < 10) {
        console.log("Intentando dormir")
    } else {
        console.log("Dormido!")
    }
}