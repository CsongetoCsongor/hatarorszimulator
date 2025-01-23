import  Person  from "./person.js";
import  Car  from "./car.js";

async function loadJsonPersons(): Promise<Person[]> {
    const url: string = "http://localhost:3000/people";
    let response = await fetch(url);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    const persons = await response.json();
    return persons.map((person: any) => new Person(
        person.id,
        person.name,
        person.nationality,
        person.sex,
        person.age,
        person.warranted,
        person.description,
        person.img
    ));
}


async function loadJsonCars(): Promise<Person[]> {
    const url: string = "http://localhost:3000/cars";
    let response = await fetch(url);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    const cars = await response.json();
    return cars.map((car: any) => new Car(
        car.id,
        car.licensePlate,
        car.model,
        car.color,
        car.traffic_permit,
        car.warranted,
        car.smuggler,
        car.description,
        car.imgSource
    ));
}


async function getPersons() {
    try {
        const data2 = await loadJsonPersons();
        console.log(data2);
        return data2;
        
        
    }
    catch (error: any) {
        console.error(error.message);
    }

    
}

async function getCars() {
    try {
        const data1 = await loadJsonCars();
        console.log(data1);
        return data1;
        
        
    }
    catch (error: any) {
        console.error(error.message);
    }

    
}

export {getPersons, getCars};