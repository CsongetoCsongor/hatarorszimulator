import Person  from "./person.js";
import Car  from "./car.js";
import  {getPersons, getCars}  from "./fetch.js";

let buttonLetPass = document.getElementById("startButton");
let buttonArrest = document.getElementById("letartoztat");
let buttonGetPersonData = document.getElementById("emberadatlekerdezes");
let buttonGetCarData = document.getElementById("autoadatlekerdezes");
let buttonSearchCar = document.getElementById("atkutatas");
let buttonGetPapers = document.getElementById("igazolvany");


// function btnLetPass() {
    
// }

// function btnArrest() {

// }

function btnGetPersonData(person: Person) { //Képzelt adatbázisból lekérdezi az ember adatait
    return [person.warranted];
}

function btnGetCarData(car: Car) { //Képzelt adatbázisból lekérdezi a kocsi adatait
    return [car.licensePlate, car.model, car.warranted];
}

function btnSearchCar(car: Car) { //Átkutatja az autót
    return [car.smuggler];
}

function btnGetPapers(person: Person, car: Car) { //Elkéri az embertől a személyigazolványt és a forgalmi engedélyt
    return [person.name, person.age, person.nationality, person.sex, car.traffic_permit];

}



export {buttonLetPass, buttonArrest, buttonGetPersonData, buttonGetCarData, buttonSearchCar, buttonGetPapers};
