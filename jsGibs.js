console.log("Hola Git!");
document.getElementById("Titulo").innerHTML = "Lo Cambie por GIT";

var pets = ["wakeman","maggie","sasha"];
console.log(pets.join("---"));

pets.forEach(mostrarMiMascota);

function mostrarMiMascota(value){
    console.log("Quiero a " + value);
}
