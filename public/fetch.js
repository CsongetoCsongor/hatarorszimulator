var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Person from "./person";
function loadJsonPersons() {
    return __awaiter(this, void 0, void 0, function* () {
        const url = "http://localhost:3000/people";
        let response = yield fetch(url);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const persons = yield response.json();
        return persons.map((person) => new Person(person.id, person.name, person.nationality, person.sex, person.age, person.warranted, person.description, person.img));
    });
}
// async function loadJsonCars(): Promise<Person[]> {
//     const url: string = "http://localhost:3000/cars";
//     let response = await fetch(url);
//     if (!response.ok) {
//         throw new Error(response.statusText);
//     }
//     const cars = await response.json();
//     return cars.map((car: any) => new Car(
//         car.id,
//         car.licenseePlate,
//         car.model,
//         car.color,
//         car.warranted,
//         car.smuggler,
//         car.description
//             ));
//     ));
// }
function processData() {
    return __awaiter(this, void 0, void 0, function* () {
        // try {
        //     const data = await loadJsonPersons();
        //     console.log(data);
        // }
        // catch (error: any) {
        //     console.error(error.message);
        // }
        console.log("fasz");
    });
}
export { processData };
