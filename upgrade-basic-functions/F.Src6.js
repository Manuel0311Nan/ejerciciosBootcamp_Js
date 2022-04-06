// Crea una función que reciba por parámetro un array y
// compruebe si existen elementos duplicados.
// Si existen los elimina para retornar un array sin los elementos duplicados.

// Solución: utilizamos "includes" para incluir los valores que cumplan nuestras necesidades
// Solución : utilizamo "push" para introducir los elementos que recogemos con "includes"

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
];

function removeDuplicates(param) {
    let newList = [];
    for (let i = 0; i < param.length; i++) {
        if (!newList.includes(param[i])) {
            newList.push(param[i]);
        }
    }
    return console.log(newList);
}
removeDuplicates(duplicates)