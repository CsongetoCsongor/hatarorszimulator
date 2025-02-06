import Person  from "./person.js";
import { generatePersonCarCombination } from "./generatePersonCarCombination.js";

const personDescript = document.getElementById("personDescript");
const emberkep = document.getElementById("emberkep");


function showData(person: Person) { //Képzelt adatbázisból lekérdezi az ember adatait
    personDescript!.innerHTML = person.description;
    emberkep!.innerHTML = `<img class="rounded-circle" src="${person.imgSource}" alt="Személy képe" />>`

}
;

async function loadPersonData() {
    const [person,car] = await generatePersonCarCombination();
    showData(person as Person);


}

loadPersonData();

