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
function btnGetPersonData(person) {
    return [person.warranted];
}
function btnGetCarData(car) {
    return [car.licensePlate, car.model, car.warranted];
}
function btnSearchCar(car) {
    return [car.smuggler];
}
function btnGetPapers(person, car) {
    return [person.name, person.age, person.nationality, person.sex, car.traffic_permit];
}
export { buttonLetPass, buttonArrest, buttonGetPersonData, buttonGetCarData, buttonSearchCar, buttonGetPapers };
