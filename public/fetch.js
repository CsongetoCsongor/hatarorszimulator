var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import Person from "./person.js";
import Car from "./car.js";
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
function loadJsonCars() {
    return __awaiter(this, void 0, void 0, function* () {
        const url = "http://localhost:3000/cars";
        let response = yield fetch(url);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const cars = yield response.json();
        return cars.map((car) => new Car(car.id, car.licensePlate, car.model, car.color, car.traffic_permit, car.warranted, car.smuggler, car.description, car.imgSource));
    });
}
function getPersons() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data1 = yield loadJsonPersons();
            // console.log(data1);
            return data1;
        }
        catch (error) {
            console.error(error.message);
        }
    });
}
function getCars() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data2 = yield loadJsonCars();
            // console.log(data2);
            return data2;
        }
        catch (error) {
            console.error(error.message);
        }
    });
}
export { getPersons, getCars };
