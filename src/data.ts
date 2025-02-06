import Person  from "./person.js";
import Car  from "./car.js";
import { generatePersonCarCombination } from "./generatePersonCarCombination.js";

const personDescript = document.getElementById("personDescript");
const emberkep = document.getElementById("emberkep");
const carDescript = document.getElementById("carDescript");
const carColor = document.getElementById("carColor");
const carPlate = document.getElementById("carPlate");
const carModel = document.getElementById("carModel");
const autokep = document.getElementById("autokepAdatlap");


function showData(person: Person, car: Car) { //Képzelt adatbázisból lekérdezi az ember adatait
    personDescript!.innerHTML += person.description;
    emberkep!.innerHTML = `<img class="rounded-circle" src="${person.imgSource}" alt="Személy képe" />`
    carDescript!.innerHTML += car.description;
    carColor!.innerHTML += car.color;
    carPlate!.innerHTML += car.licensePlate;
    carModel!.innerHTML += car.model;
    console.log(autokep);
    
    autokep!.innerHTML = `<img class="rounded-circle" src="${car.imgSource}" alt="Autó képe" />`

}
;

async function loadPersonData() {
    const [person,car] = await generatePersonCarCombination();
    showData(person as Person, car as Car);


}

loadPersonData();

