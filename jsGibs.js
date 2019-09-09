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

var PETS = pets.map((value) => value.toUpperCase() + ".");

/* pets.forEach((value) => {
    PETS.push(value.toUpperCase());
});
*/

console.log("-----------");
PETS.sort();
PETS.forEach(mostrarMiMascota);

console.log("-----------");
var filterPets = pets.filter((value) => {
    if (value[1] == "a") return value; else return "";
})
filterPets.forEach(mostrarMiMascota);

console.log("-----------");
var xp = PETS.indexOf("POKER.",0);
console.log("Poker ocupa la posicion " + xp);

function constructura() {
    this.nombre = "";
    this.apellido = "";
    this.Print = function(){
        console.log("Mi nombre es " + this.nombre + " " + this.apellido);
    };
}

var obj = new constructura();
obj.nombre = "Jorge";
obj.apellido = "Acosta";
obj.Print();
