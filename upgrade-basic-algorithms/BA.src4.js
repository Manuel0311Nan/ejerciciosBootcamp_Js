//Arrays 1
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0]);

//Arrays 2
avengers[0] = "IRON MAN"
console.log(avengers)

//Arrays 3

console.log(avengers.length);

//Arrays 4

const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty", "Summer");
console.log(rickAndMortyCharacters[rickAndMortyCharacters.length - 1]);

rickAndMortyCharacters.push("Lapiz Lopez")
console.log(rickAndMortyCharacters)

//Arrays 5

rickAndMortyCharacters.pop();
console.log(
    " El primer elemento es " + rickAndMortyCharacters[0] + " y el último elemento es " + (rickAndMortyCharacters[rickAndMortyCharacters.length - 1]));

//Arrays 6
rickAndMortyCharacters.splice(1, 2);
console.log(rickAndMortyCharacters);