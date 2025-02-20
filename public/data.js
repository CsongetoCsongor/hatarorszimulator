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
let carImgSource;
const personDescript = document.getElementById("personDescript");
const emberkep = document.getElementById("emberkep");
const carDescript = document.getElementById("carDescript");
const carColor = document.getElementById("carColor");
const carPlate = document.getElementById("carPlate");
const carModel = document.getElementById("carModel");
const autokep = document.getElementById("autokepAdatlap");
const canvas = document.getElementById('animationCanvas');
const ctx = canvas === null || canvas === void 0 ? void 0 : canvas.getContext('2d');
const startButton = document.getElementById('startBgdiv');
const letartoztatButton = document.getElementById('letartoztatdiv');
const actionText = document.getElementById('actionText');
const message = document.getElementById('message');
const auto = document.getElementById('auto');
// Beállítjuk a canvas háttérképét
canvas.style.background = "url('ut2.jpg') no-repeat center center";
canvas.style.backgroundSize = "cover";
canvas.style.width = "100%";
canvas.style.height = "40%";
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
        showData(person, car);
        if (!carImgSource) {
            console.error('Nincs megfelelő kép az adatlapról!');
            return;
        }
        initializeAnimation();
    });
}
function initializeAnimation() {
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
        imageObject.moveToEnd();
        setTimeout(() => {
            location.reload();
        }, 2000);
    });
    letartoztatButton.addEventListener('click', () => {
        console.log("kisfaszu");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        actionText.innerText = "Letartóztattad a kriminális bűnözőt!";
        setTimeout(() => {
            location.reload();
        }, 2000);
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
