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
    this.PrintAny = function(arg1){console.log("Este metodo imprime esto : " + arg1)};
}

console.log("-----------");
var obj = new constructura();
obj.nombre = "Jorge";
obj.apellido = "Acosta";
obj.Print();
obj.pet = "Wakeman";
obj.PrintAny(obj.pet);

console.log("-----------");


function crearReg(nombre, apellido, edad){
    class reg{
        name = nombre;
        surname = apellido;
        age = edad;
    }
    const registro = new reg;
    //registro.name = nombre;
    return registro;
}

var array = [];
array.push(crearReg("Jorge","Acosta","45"));


array.push(crearReg("Luis","Bello","46"));

function showArray(arr){
    let a = [];
    let c= 0;
    a = arr;
    let l = a.length;
    console.log("El Array tiene " + l + " elementos. Estos son :");
    a.forEach(element => {
        c++;
        console.log(c + ") " + element.name + " " + element.surname + ".");
    });
    console.log("Fin del Array -------------------");
}

showArray(array);
console.log(array[0].name + " tiene " + array[0].age +"\n" + array[1].name + " tiene " + array[1].age);

