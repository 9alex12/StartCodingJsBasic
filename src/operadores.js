/////Aritmeticos
//Unarios(-, +, typeof)
console.log(typeof "hola mundo");
console.log(+"123"); //numero
console.log(-"123"); //numero
console.log(+"tres"); //NaN

//Binarios
console.log(2 + 3); //5
console.log(3 - 3); //0
console.log(2 * 3); //6
console.log(6 / 3); //2
console.log(7 % 3); //1

//Logicos

//Binarios

//Mayor y menor
console.log(2 > 3); //False
console.log(2 < 3); //True

//== , ===
console.log(2 === 2); //True
console.log(2 === "2"); //false
console.log(2 == 3); //false
console.log(2 == 2); //true

//!= ,!==
console.log(2 !== "2"); //True
console.log(2 != "2"); //False

//AND: TRUE CUANDO SE CUMPLEN TODAS LAS CONDICIONES
console.log(2 === 2 && 2 > 0); //True
console.log("2" === 2 && 2 > 0); //False
console.log("2" === 2 && 2 < 0); //False
console.log(2 === 2 && 2 < 0); //False

//OR: TRUE CUANDO UNA ES VERDADERA
console.log(2 === 2 || 2 > 0); //True
console.log(2 === "2" || 2 > 0); //True
console.log(2 === 2 || 2 < 0); //True
console.log(2 === "2" || 2 < 0); //false

//Not(!):Negacion del valor

//Ternario
let edad = 18;
console.log(edad >= 18 ? "Podes manejar" : "No tenes edad para manejar");
