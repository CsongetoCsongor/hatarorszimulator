// import Person  from "./person.js";
// import Car  from "./car.js";
// import { generatePersonCarCombination } from "./generatePersonCarCombination.js";
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
import { quickTimeEvent } from "./quickTimeEvent.js";
import Player from "./player.js";
let player = new Player(0, "neutral", ["../player-arckifejezesek/neutral.png", "../player-arckifejezesek/angry.png"], "../fegyver-kepek-skinek/ak-skin-1.png");
let currentPerson;
let currentCar;
if (!localStorage.getItem('borderControlBalance')) {
    localStorage.setItem('borderControlBalance', '1000');
    const balanceDiv = document.getElementById('balanceDiv');
    balanceDiv.innerHTML = `1000 Ft`;
}
else {
    const balanceDiv = document.getElementById('balanceDiv');
    balanceDiv.innerHTML = `${localStorage.getItem('borderControlBalance')} Ft`;
}
const balance = parseInt(localStorage.getItem('borderControlBalance') || '1000');
if (!localStorage.getItem('prevRoundMessage')) {
    localStorage.setItem('prevRoundMessage', '...');
    const prevRoundMessage = document.getElementById('prevRoundMessage');
    prevRoundMessage.innerHTML = `...`;
}
else {
    const prevRoundMessage = document.getElementById('prevRoundMessage');
    prevRoundMessage.innerHTML = `${localStorage.getItem('prevRoundMessage')}`;
}
if (!localStorage.getItem('prevRoundReward')) {
    localStorage.setItem('prevRoundReward', '...');
    const prevRoundReward = document.getElementById('prevRoundReward');
    prevRoundReward.innerHTML = `...`;
}
else {
    if (localStorage.getItem('prevRoundReward') == null) {
    }
    else if (parseInt(localStorage.getItem('prevRoundReward') || '') > 0) {
        const prevRoundReward = document.getElementById('prevRoundReward');
        prevRoundReward.innerHTML = `+${localStorage.getItem('prevRoundReward')} Ft`;
    }
    else if (parseInt(localStorage.getItem('prevRoundReward') || '') < 0) {
        const prevRoundReward = document.getElementById('prevRoundReward');
        prevRoundReward.innerHTML = `${localStorage.getItem('prevRoundReward')} Ft`;
    }
    else {
        const prevRoundReward = document.getElementById('prevRoundReward');
        prevRoundReward.innerHTML = `${localStorage.getItem('prevRoundReward')} Ft`;
    }
}
// const balance = parseInt(localStorage.getItem('borderControlBalance') || '1000');
let carImgSource;
const personDescript = document.getElementById("personDescript");
const personName = document.getElementById("personName");
const personBorn = document.getElementById("personBorn");
const personNationality = document.getElementById("personNationality");
const personSex = document.getElementById("personSex");
const personWarrant = document.getElementById("personWarrant");
const emberkep = document.getElementById("emberkep");
const carDescript = document.getElementById("carDescript");
const carColor = document.getElementById("carColor");
const carPlate = document.getElementById("carPlate");
const carModel = document.getElementById("carModel");
const carWarrant = document.getElementById("carWarrant");
const smugglerText = document.getElementById("smugglerText");
const smuggler = document.getElementById("smuggler");
const smugglerDiv = document.getElementById("smugglerDiv");
const smugglerLet = document.getElementById("smugglerLet");
const smugglerJail = document.getElementById("smugglerJail");
const autokep = document.getElementById("autokepAdatlap");
const canvas = document.getElementById('animationCanvas');
const ctx = canvas === null || canvas === void 0 ? void 0 : canvas.getContext('2d');
const startButton = document.getElementById('startBgdiv');
const letartoztatButton = document.getElementById('letartoztatdiv');
const emberadatButton = document.getElementById('emberadatdiv');
const autoadatButton = document.getElementById('autoadatdiv');
const atkutatasButton = document.getElementById('atkutatasdiv');
const papirokButton = document.getElementById('papirokdiv');
const actionText = document.getElementById('actionText');
const message = document.getElementById('message');
const auto = document.getElementById('auto');
const quickTimeEventContainer = document.getElementById("quickTimeEventContainer");
quickTimeEventContainer.style.display = "none";
smuggler.style.display = "none";
smugglerDiv.style.display = "none";
let tF = false;
// Beállítjuk a canvas háttérképét
canvas.style.background = "url('ut2.jpg') no-repeat center center";
canvas.style.backgroundSize = "cover";
canvas.style.width = "100%";
canvas.style.height = "40%";
function randNum(min, max) {
    // Ensures the minimum and maximum are integers and handles edge cases
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function updateBalance(amount) {
    const newBalance = balance + amount;
    localStorage.setItem('borderControlBalance', newBalance.toString());
    const balanceDiv = document.getElementById('balanceDiv');
    balanceDiv.innerHTML = `${newBalance} Ft`;
    return newBalance;
}
function updatePrevRoundMessage(text, reward) {
    localStorage.setItem('prevRoundMessage', text);
    localStorage.setItem('prevRoundReward', String(reward));
    const prevRoundMessage = document.getElementById('prevRoundMessage');
    const prevRoundReward = document.getElementById('prevRoundReward');
    prevRoundMessage.innerHTML = text;
    if (reward > 0) {
        prevRoundReward.innerHTML = "+" + String(reward) + " Ft";
    }
    else if (reward < 0) {
        prevRoundReward.innerHTML = String(reward) + " Ft";
    }
    else {
        prevRoundReward.innerHTML = String(reward) + " Ft";
    }
    return text;
}
function showData(person, car) {
    personDescript.innerHTML += person.description;
    emberkep.innerHTML = `<img class="rounded-circle" src="${person.imgSource}" alt="" />`;
    carDescript.innerHTML += car.description;
    carColor.innerHTML += car.color;
    carPlate.innerHTML += car.licensePlate;
    carModel.innerHTML += car.model;
    autokep.innerHTML = `<img id="autokep2" class="border border-0" src="${car.imgSource}" alt="Autó képe" />`;
    carImgSource = car.imgSource;
    console.log(`Betöltött autó kép: ${carImgSource}`);
}
function loadPersonData() {
    return __awaiter(this, void 0, void 0, function* () {
        const [person, car] = yield generatePersonCarCombination();
        currentPerson = person;
        currentCar = car;
        showData(person, car);
        if (!carImgSource) {
            console.error('Nincs megfelelő kép az adatlapról!');
            return;
        }
        initializeAnimation();
    });
}
function initializeAnimation() {
    return __awaiter(this, void 0, void 0, function* () {
        const imageWidth = 100;
        const imageHeight = 100;
        let y = (canvas.height - imageHeight) / 2;
        const speedX = 3;
        const stopX = (canvas.width - imageWidth) / 2;
        const endX = canvas.width;
        const imageObject = new ImageObject(-imageWidth, y, imageWidth, imageHeight, carImgSource, speedX, stopX, endX);
        console.log(`Animációhoz használt autó kép forrása: ${carImgSource}`);
        animate(imageObject);
        startButton.addEventListener('click', () => {
            if (currentPerson.warranted.length > 0) {
                actionText.innerText = "Átengedtél egy bűnözőt!";
                updateBalance(-1000);
                updatePrevRoundMessage("Átengedtél egy bűnözőt!", -1000);
            }
            else {
                actionText.innerText = "Elengedtél egy ártatlan embert.";
                updateBalance(1000);
                updatePrevRoundMessage("Elengedtél egy ártatlan embert.", 1000);
            }
            imageObject.moveToEnd();
            setTimeout(() => {
                location.reload();
            }, 2000);
        });
        letartoztatButton.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
            if (randNum(1, 10) < 4) {
                quickTimeEventContainer.style.display = "block";
                let quickTimeEventFinish = yield quickTimeEvent(player);
                console.log(quickTimeEventFinish + "a quick time event");
                if (quickTimeEventFinish == true) {
                    quickTimeEventContainer.style.display = "none";
                    actionText.innerText = "Lelőtted a támadót!";
                    updateBalance(10000);
                    updatePrevRoundMessage("Lelőtted a támadót!", 10000);
                }
                else {
                    quickTimeEventContainer.style.display = "none";
                    actionText.innerText = "Meglőttek!";
                    updateBalance(-10000);
                    updatePrevRoundMessage("Meglőttek!", -10000);
                }
            }
            else {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                if (currentPerson.warranted.length > 0) {
                    actionText.innerText = "Letartóztattál egy bűnözőt!";
                    updateBalance(1000);
                    updatePrevRoundMessage("Letartóztattál egy bűnözőt!", 1000);
                }
                else {
                    actionText.innerText = "Ártatlan embert tartóztattál le.";
                    updateBalance(-1000);
                    updatePrevRoundMessage("Ártatlan embert tartóztattál le.", -1000);
                }
            }
            setTimeout(() => {
                location.reload();
            }, 2000);
        }));
        emberadatButton.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
            if (randNum(1, 10) < 4) {
                quickTimeEventContainer.style.display = "block";
                let quickTimeEventFinish = yield quickTimeEvent(player);
                console.log(quickTimeEventFinish + "a quick time event");
                if (quickTimeEventFinish == true) {
                    quickTimeEventContainer.style.display = "none";
                    actionText.innerText = "Lelőtted a támadót!";
                    updateBalance(10000);
                    updatePrevRoundMessage("Lelőtted a támadót!", 10000);
                    setTimeout(() => {
                        location.reload();
                    }, 2000);
                }
                else {
                    quickTimeEventContainer.style.display = "none";
                    actionText.innerText = "Meglőttek!";
                    updateBalance(-10000);
                    updatePrevRoundMessage("Meglőttek!", -10000);
                    setTimeout(() => {
                        location.reload();
                    }, 2000);
                }
            }
            else {
                personName.innerHTML += '<span class="fw-bold">Név: </span>' + currentPerson.name;
                personBorn.innerHTML += '<span class="fw-bold">Születési dátum: </span>' + currentPerson.age.toString();
                personNationality.innerHTML += '<span class="fw-bold">Nemzetiség: </span>' + currentPerson.nationality;
                personSex.innerHTML += '<span class="fw-bold">Neme: </span>' + currentPerson.sex;
                personWarrant.innerHTML += currentPerson.warranted.length > 0 ? '<span class="fw-bold">Körözött</span>' : '<span class="fw-bold">Nem körözött</span>';
            }
        }));
        autoadatButton.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
            if (false) {
                quickTimeEventContainer.style.display = "block";
                let quickTimeEventFinish = yield quickTimeEvent(player);
                console.log(quickTimeEventFinish + "a quick time event");
                if (quickTimeEventFinish == true) {
                    quickTimeEventContainer.style.display = "none";
                    actionText.innerText = "Lelőtted a támadót!";
                    updateBalance(10000);
                    updatePrevRoundMessage("Lelőtted a támadót!", 10000);
                    setTimeout(() => {
                        location.reload();
                    }, 2000);
                }
                else {
                    quickTimeEventContainer.style.display = "none";
                    actionText.innerText = "Meglőttek!";
                    updateBalance(-10000);
                    updatePrevRoundMessage("Meglőttek!", -10000);
                    setTimeout(() => {
                        location.reload();
                    }, 2000);
                }
            }
            else {
                carWarrant.innerHTML += currentCar.warranted.length > 0 ? '<span class="fw-bold">Körözött: ' + currentCar.warranted + '</span>' : '<span class="fw-bold">Nem körözött</span>';
            }
        }));
        atkutatasButton.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
            if (randNum(1, 10) < 4) {
                quickTimeEventContainer.style.display = "block";
                let quickTimeEventFinish = yield quickTimeEvent(player);
                console.log(quickTimeEventFinish + "a quick time event");
                if (quickTimeEventFinish == true) {
                    quickTimeEventContainer.style.display = "none";
                    actionText.innerText = "Lelőtted a támadót!";
                    updateBalance(10000);
                    updatePrevRoundMessage("Lelőtted a támadót!", 10000);
                    setTimeout(() => {
                        location.reload();
                    }, 2000);
                }
                else {
                    quickTimeEventContainer.style.display = "none";
                    actionText.innerText = "Meglőttek!";
                    updateBalance(-10000);
                    updatePrevRoundMessage("Meglőttek!", -10000);
                    setTimeout(() => {
                        location.reload();
                    }, 2000);
                }
            }
            else {
                if (currentCar.smuggler.length > 0) {
                    smugglerText.innerHTML = '<span class="fw-bold">Ezt találtad: ' + currentCar.smuggler + '</span>';
                    if (randNum(1, 3) > 1) {
                        smugglerLet.style.display = "none";
                    }
                    else {
                        tF = true;
                    }
                }
                else {
                    smugglerText.innerHTML = '<span class="fw-bold">Nem találtál semmi illegálisat</span>';
                    smugglerJail.style.display = "none";
                    smugglerLet.style.display = "block";
                }
                smuggler.style.display = "block";
                smugglerDiv.style.display = "flex";
            }
        }));
        papirokButton.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
            if (randNum(1, 3) > 1) {
                quickTimeEventContainer.style.display = "block";
                let quickTimeEventFinish = yield quickTimeEvent(player);
                console.log(quickTimeEventFinish + "a quick time event");
                if (quickTimeEventFinish == true) {
                    quickTimeEventContainer.style.display = "none";
                    actionText.innerText = "Lelőtted a támadót!";
                    updateBalance(10000);
                    updatePrevRoundMessage("Lelőtted a támadót!", 10000);
                }
                else {
                    quickTimeEventContainer.style.display = "none";
                    actionText.innerText = "Meglőttek!";
                    updateBalance(-10000);
                    updatePrevRoundMessage("Meglőttek!", -10000);
                }
            }
            else {
                //Ide írd a gomb funkcionalitását
            }
        }));
        smugglerJail.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
            if (randNum(1, 3) > 1) {
                quickTimeEventContainer.style.display = "block";
                let quickTimeEventFinish = yield quickTimeEvent(player);
                console.log(quickTimeEventFinish + "a quick time event");
                if (quickTimeEventFinish == true) {
                    quickTimeEventContainer.style.display = "none";
                    actionText.innerText = "Lelőtted a támadót!";
                    updateBalance(10000);
                    updatePrevRoundMessage("Lelőtted a támadót!", 10000);
                }
                else {
                    quickTimeEventContainer.style.display = "none";
                    actionText.innerText = "Meglőttek!";
                    updateBalance(-10000);
                    updatePrevRoundMessage("Meglőttek!", -10000);
                }
            }
            else {
                actionText.innerText = "Letartóztattál egy bűnözőt!";
                updateBalance(1000);
                updatePrevRoundMessage("Letartóztattál egy bűnözőt!", 1000);
            }
            smuggler.style.display = "none";
            smugglerDiv.style.display = "none";
            setTimeout(() => {
                location.reload();
            }, 2000);
        }));
        smugglerLet === null || smugglerLet === void 0 ? void 0 : smugglerLet.addEventListener('click', () => {
            if (currentPerson.warranted.length > 0) {
                actionText.innerText = "Átengedtél egy bűnözőt!";
                updateBalance(-1000);
                updatePrevRoundMessage("Átengedtél egy bűnözőt!", -1000);
            }
            else {
                actionText.innerText = "Elengedtél egy ártatlan embert.";
                updateBalance(1000);
                updatePrevRoundMessage("Elengedtél egy ártatlan embert.", 1000);
            }
            if (tF === true) {
                smugglerLet.style.display = "block";
                smugglerText.innerText += `A csempész ajánlott egy köteg pénzt ha átengeded.`;
                let amount = randNum(30, 50) * 1000;
                updateBalance(amount);
            }
            smuggler.style.display = "none";
            smugglerDiv.style.display = "none";
            imageObject.moveToEnd();
            setTimeout(() => {
                location.reload();
            }, 2000);
        });
    });
}
class ImageObject {
    constructor(x, y, width, height, imgSrc, speedX, stopX, endX) {
        this.loaded = false;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.img = new Image();
        this.img.src = imgSrc;
        this.img.onerror = () => console.error('Nem sikerült betölteni a képet:', imgSrc);
        this.speedX = speedX;
        this.stopX = stopX;
        this.endX = endX;
        this.img.onload = () => {
            this.loaded = true;
        };
    }
    draw() {
        if (this.loaded && ctx) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        }
    }
    update() {
        if (this.x < this.stopX) {
            this.x += this.speedX;
        }
        this.draw();
    }
    moveToEnd() {
        const move = () => {
            if (this.x + this.width < this.endX) {
                this.x += this.speedX;
                this.draw();
                requestAnimationFrame(move);
            }
            else {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }
        };
        move();
    }
}
function animate(imageObject) {
    function frame() {
        imageObject.update();
        if (imageObject.x < imageObject.stopX) {
            requestAnimationFrame(frame);
        }
    }
    requestAnimationFrame(frame);
}
document.addEventListener('DOMContentLoaded', () => __awaiter(void 0, void 0, void 0, function* () {
    yield loadPersonData();
}));
