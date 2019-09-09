console.log("Hola Git!");
document.getElementById("Titulo").innerHTML = "Lo Cambie por GIT";

var pets = ["wakeman","maggie","sasha"];
console.log(pets.join("---"));

pets.forEach(mostrarMiMascota);

function mostrarMiMascota(value){
    console.log("Quiero a " + value);
}

console.log("-----------");
pets.push("Poker");
pets.forEach(mostrarMiMascota);

console.log("-----------");
var x = pets.pop();

pets.unshift(x);
pets.forEach(mostrarMiMascota);


