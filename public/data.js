var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { generatePersonCarCombination } from "./generatePersonCarCombination.js";
const personDescript = document.getElementById("personDescript");
const emberkep = document.getElementById("emberkep");
function showData(person) {
    personDescript.innerHTML = person.description;
    emberkep.innerHTML = `<img class="rounded-circle" src="${person.imgSource}" alt="Személy képe" />>`;
}
;
function loadPersonData() {
    return __awaiter(this, void 0, void 0, function* () {
        const [person, car] = yield generatePersonCarCombination();
        showData(person);
    });
}
loadPersonData();
