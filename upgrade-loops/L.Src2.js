// Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados
// y añade la propiedad ***isApproved*** a true o false en consecuencia.
// Una vez lo tengas compruébalo con un ***console.log***.
// Puedes usar este array para probar tu función:

const alumns = [
    { name: 'Pepe Viruela', T1: false, T2: false, T3: true },
    { name: 'Lucia Aranda', T1: true, T2: false, T3: true },
    { name: 'Juan Miranda', T1: false, T2: true, T3: true },
    { name: 'Alfredo Blanco', T1: false, T2: false, T3: false },
    { name: 'Raquel Benito', T1: true, T2: true, T3: true }
]


for (i = 0; i < alumns.length; i++) {
    alumn = alumns[i];
    // Creamos un contador de trimestres aprovados.
    let counter = 0;
    counter = alumn.T1 ? counter + 1 : counter;
    counter = alumn.T2 ? counter + 1 : counter;
    counter = alumn.T3 ? counter + 1 : counter;
    alumn.isApproved = counter >= 2 ? true : false;
}
console.log(alumns);