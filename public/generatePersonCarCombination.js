var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getPersons, getCars } from "./fetch.js";
function generatePersonCarCombination() {
    return __awaiter(this, void 0, void 0, function* () {
        let persons = yield getPersons();
        if (persons == null) {
            persons = [];
        }
        let cars = yield getCars();
        if (cars == null) {
            cars = [];
        }
        console.log("generalas elott:", persons);
        const randomPersonNum = Math.floor(Math.random() * (persons.length));
        const randomCarNum = Math.floor(Math.random() * (cars.length));
        console.log('szemely:', persons[randomPersonNum]);
        return [persons[randomPersonNum], cars[randomCarNum]];
    });
}
export { generatePersonCarCombination };
