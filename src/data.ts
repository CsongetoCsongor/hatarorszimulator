import Person  from "./person.js";


const personDescript = document.getElementById("personDescript");


function showData(person: Person) { //Képzelt adatbázisból lekérdezi az ember adatait
    personDescript!.innerText += person.description;
}
;