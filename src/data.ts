// import Person  from "./person.js";
// import Car  from "./car.js";
// import { generatePersonCarCombination } from "./generatePersonCarCombination.js";


// let carImgSource : string;

// const personDescript = document.getElementById("personDescript");
// const emberkep = document.getElementById("emberkep");
// const carDescript = document.getElementById("carDescript");
// const carColor = document.getElementById("carColor");
// const carPlate = document.getElementById("carPlate");
// const carModel = document.getElementById("carModel");
// const autokep = document.getElementById("autokepAdatlap");


// function showData(person: Person, car: Car) { //Képzelt adatbázisból lekérdezi az ember adatait

//     personDescript!.innerHTML += person.description;
//     emberkep!.innerHTML = `<img class="rounded-circle" src="${person.imgSource}" alt="" />`;
//     carDescript!.innerHTML += car.description;
//     carColor!.innerHTML += car.color;
//     carPlate!.innerHTML += car.licensePlate;
//     carModel!.innerHTML += car.model;
//     console.log(autokep);

//     autokep!.innerHTML = `<img id="autokep2" class="rounded-5" src="${car.imgSource}" alt="Autó képe" />`
//     carImgSource = car.imgSource;
//     console.log(carImgSource);


// }
// ;
// function startAnimation() {
//     // Add your animation logic here
//     requestAnimationFrame(() => {
//         // Update your canvas/game state
//         startAnimation(); // Recursive call for continuous animation
//     });
// }



// async function loadPersonData() {
//     const [person,car] = await generatePersonCarCombination();
//     showData(person as Person, car as Car);



// }






// document.addEventListener('DOMContentLoaded', () => {


//     // Canvas inicializálás
//     const canvas = document.getElementById('animationCanvas') as HTMLCanvasElement;
//     const ctx = canvas.getContext('2d');
//     const startButton = document.getElementById('startBgdiv') as HTMLButtonElement;
//     const message = document.getElementById('message') as HTMLDivElement;
//     const auto = document.getElementById('auto') as HTMLDivElement;

//     if (!ctx || !startButton || !message) {
//         console.error('Canvas context, startButton vagy message nem található!');
//         return;
//     }

//     // Méretezés a képernyőhöz
//     function resizeCanvas() {
//         canvas.style.marginTop = "10%";
//         canvas.width = 0.5*window.innerWidth;
//         canvas.height = 0.3*window.innerHeight;
//         // adjustImagePosition();
//         positionElements();
//     }
//     function startAnimation() {
//         // Add your animation logic here
//         requestAnimationFrame(() => {
//             // Update your canvas/game state
//             startAnimation(); // Recursive call for continuous animation
//         });
//     }


//     function positionElements() {
//         const canvasRect = canvas.getBoundingClientRect();
//         const canvasCenterX = canvasRect.left + canvas.width / 2;
//         const canvasCenterY = canvasRect.top + canvas.height / 2;

//         // Üzenet pozíciója
//         message.style.top = `${canvasCenterY - message.offsetHeight / 2}px`;
//         message.style.left = `${canvasCenterX - message.offsetWidth / 2}px`;

//         // Autó pozíciója
//         auto.style.top = `${canvasCenterY - auto.offsetHeight / 2}px`;
//         auto.style.left = `${canvasCenterX - auto.offsetWidth / 2}px`;
//     }

//     // Canvas méretének változása esetén újrapozícionálás
//     // window.addEventListener('resize', positionElements);

//     // Háttérkép betöltése
//     const background = new Image();
//     background.src = 'ut2.jpg'; // Helyettesítsd a kívánt háttérkép URL-jével
//     background.onerror = () => console.error('Nem sikerült betölteni a háttérképet!');

//     // Kép osztály
//     class ImageObject {
//         x: number;
//         y: number;
//         width: number;
//         height: number;
//         img: HTMLImageElement;
//         speedX: number;
//         loaded: boolean = false;  // Új változó, hogy nyomon kövessük, mikor töltődik be a kép


//         constructor(x: number, y: number, width: number, height: number, imgSrc: string, speedX: number) {
//             this.x = x;
//             this.y = y;
//             this.width = width;
//             this.height = height;
//             this.img = new Image();
//             this.img.src = imgSrc;
//             this.img.onerror = () => console.error('Nem sikerült betölteni a képet:', imgSrc);
//             this.speedX = speedX;
//             this.img.onload = () => {
//                 this.loaded = true;  // A kép betöltődött
//             };
//         }

//         draw(): void {
//             if (this.loaded) {
//                 ctx!.drawImage(this.img, this.x, this.y, this.width, this.height);
//             } else {
//                 console.error('A kép még nem áll készen a kirajzolásra!');
//             }
//         }

//         update(): void {
//             // Mozgatás balról jobbra, megáll a képernyő közepén
//             if (this.x + this.width < canvas.width / 2) {
//                 this.x += this.speedX;
//             }

//             this.draw();
//         }

//         moveToEnd(): void {
//             // Folytatás a képernyő jobb széléig
//             if (this.x + this.width < canvas.width) {
//                 this.x += this.speedX;
//             } else {
//                 this.x = canvas.width - this.width; // Rögzítés a képernyő szélén
//             }

//             this.draw();
//         }
//     }

//     // Egyetlen kép létrehozása
//     console.log(`anyad2: ${carImgSource}`);

//     const carImgSrc = carImgSource;
//     console.log(`anyad: ${carImgSrc}`);

//     if (!carImgSrc) {
//         console.error('Nincs megfelelő kép az adatlapról!');
//         return;
//     }
//     const imageWidth = 100;
//     const imageHeight = 100;
//     let y = (canvas.height - imageHeight) / 2; // Kép középre helyezése függőlegesen
//     const speedX = 3;
//     const imageObject = new ImageObject(-imageWidth, y, imageWidth, imageHeight, carImgSrc, speedX);
//     console.log(carImgSrc);




//     // Állapotváltozók
//     let isMoving = false;
//     let hasReachedMiddle = false;
//     let hasReachedEnd = false;

//     // Frissítse a kép helyzetét a canvas méretének változásakor
//     function adjustImagePosition() {
//         y = (canvas.height - imageHeight) / 2;
//         imageObject.y = y;
//     }

//     // Animációs ciklus
//     function animate(): void {
//         ctx!.clearRect(0, 0, canvas.width, canvas.height);

//         // Háttérkép kirajzolása
//         if (background.complete && background.naturalWidth !== 0) {
//             ctx!.drawImage(background, 0, 0, canvas.width, canvas.height);
//         } else {
//             console.error('A háttérkép még nem áll készen a kirajzolásra!');
//         }

//         if (!hasReachedMiddle) {
//             imageObject.update();
//             if (imageObject.x + imageObject.width >= canvas.width / 2) {
//                 hasReachedMiddle = true;
//                 isMoving = false;
//                 message.style.display = 'block'; // Üzenet megjelenítése
//                 auto.style.display = 'block'; // Üzenet megjelenítése
//                 positionElements();
//             }
//         } else if (isMoving && !hasReachedEnd) {
//             imageObject.moveToEnd();
//             if (imageObject.x + imageObject.width >= canvas.width) {
//                 hasReachedEnd = true;
//                 cancelAnimationFrame(animationId);
//                 message.style.display = 'none'; // Üzenet eltüntetése
//                 auto.style.display = 'none'; // Üzenet eltüntetése
//             }
//         }

//         if (!hasReachedEnd) {
//             animationId = requestAnimationFrame(animate);
//         }
//     }

//     let animationId = requestAnimationFrame(animate);

//     // Amikor a háttérkép betöltődik, indítjuk az animációt
//     background.onload = () => {
//         animate();
//     };

//     // Gomb eseménykezelő
//     startButton.addEventListener('click', () => {
//         if (hasReachedMiddle && !hasReachedEnd) {
//             isMoving = true;
//             auto.style.display = "none"
//             animate();
//         }
//         setTimeout(() => {
//             location.reload();
//         }, 2000);


//     });

//     // Ablakméret változás kezelése
//     window.addEventListener('resize', () => {
//         resizeCanvas();
//     });

//     // Az inicializáláskor beállítjuk a canvas méretét
//     resizeCanvas();

// });
// loadPersonData();

import Person from "./person.js";
import Car from "./car.js";
import { generatePersonCarCombination } from "./generatePersonCarCombination.js";
import { quickTimeEvent } from "./quickTimeEvent.js";
import Player from "./player.js";


let currentPerson: Person;
let currentCar: Car;

if (!localStorage.getItem('borderControlBalance')) {
    localStorage.setItem('borderControlBalance', '1000');
    const balanceDiv = document.getElementById('balanceDiv') as HTMLDivElement;
    balanceDiv.innerHTML = `1000 Ft`;
} else {
    const balanceDiv = document.getElementById('balanceDiv') as HTMLDivElement;
    balanceDiv.innerHTML = `${localStorage.getItem('borderControlBalance')} Ft`;
}

if (!localStorage.getItem('equippedWeapon')) {
    localStorage.setItem('equippedWeapon', 'fegyver-kepek-skinek/pistol-skin-2.webp');
    
}
let player = new Player(0, "neutral", ["../player-arckifejezesek/neutral.png", "../player-arckifejezesek/angry.png"], "../" + localStorage.getItem('equippedWeapon')!);
console.log(localStorage.getItem('equippedWeapon'));


const balance = parseInt(localStorage.getItem('borderControlBalance') || '1000');

if (!localStorage.getItem('prevRoundMessage')) {
    localStorage.setItem('prevRoundMessage', '...');
    const prevRoundMessage = document.getElementById('prevRoundMessage') as HTMLDivElement;
    prevRoundMessage.innerHTML = `...`;
} else {
    const prevRoundMessage = document.getElementById('prevRoundMessage') as HTMLDivElement;
    prevRoundMessage.innerHTML = `${localStorage.getItem('prevRoundMessage')}`;
}

if (!localStorage.getItem('prevRoundReward')) {
    localStorage.setItem('prevRoundReward', '...');
    const prevRoundReward = document.getElementById('prevRoundReward') as HTMLDivElement;
    prevRoundReward.innerHTML = `...`;
} else {
    if (localStorage.getItem('prevRoundReward') == null) {

    }
    else if (parseInt(localStorage.getItem('prevRoundReward') || '') > 0) {
        const prevRoundReward = document.getElementById('prevRoundReward') as HTMLDivElement;
        prevRoundReward.innerHTML = `+${localStorage.getItem('prevRoundReward')} Ft`;
    }
    else if (parseInt(localStorage.getItem('prevRoundReward') || '') < 0) {
        const prevRoundReward = document.getElementById('prevRoundReward') as HTMLDivElement;
        prevRoundReward.innerHTML = `${localStorage.getItem('prevRoundReward')} Ft`;
    }
    else {
        const prevRoundReward = document.getElementById('prevRoundReward') as HTMLDivElement;
        prevRoundReward.innerHTML = `${localStorage.getItem('prevRoundReward')} Ft`;
    }

}

// const balance = parseInt(localStorage.getItem('borderControlBalance') || '1000');

let carImgSource: string;

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
const carWeight = document.getElementById("carWeight");
const carHP = document.getElementById("carHP");
const smugglerText = document.getElementById("smugglerText");
const smugglerText2 = document.getElementById("smugglerText2");
const smuggler = document.getElementById("smuggler");
const smugglerDiv = document.getElementById("smugglerDiv");
const smugglerLet = document.getElementById("smugglerLet");
const smugglerJail = document.getElementById("smugglerJail");
const smugglerClose = document.getElementById("smugglerClose");
const autokep = document.getElementById("autokepAdatlap");
const canvas = document.getElementById('animationCanvas') as HTMLCanvasElement;
const ctx = canvas?.getContext('2d');
const startButton = document.getElementById('startBgdiv') as HTMLButtonElement;
const letartoztatButton = document.getElementById('letartoztatdiv') as HTMLButtonElement;
const emberadatButton = document.getElementById('emberadatdiv') as HTMLButtonElement;
const autoadatButton = document.getElementById('autoadatdiv') as HTMLButtonElement;
const atkutatasButton = document.getElementById('atkutatasdiv') as HTMLButtonElement;
const papirokButton = document.getElementById('papirokdiv') as HTMLButtonElement;
const actionText = document.getElementById('actionText') as HTMLDivElement;
const message = document.getElementById('message') as HTMLDivElement;
const auto = document.getElementById('auto') as HTMLDivElement;
const quickTimeEventContainer = document.getElementById("quickTimeEventContainer");
const shopWindow = document.getElementById("shopcontainer") as HTMLDivElement;
quickTimeEventContainer!.style.display = "none";
smuggler!.style.display = "none";
smugglerDiv!.style.display = "none";
shopWindow.style.display = "none";
let tF: boolean;

document.getElementById("shopBtn")?.addEventListener("click", function () {
    shopWindow.style.display = "flex";
});

// Beállítjuk a canvas háttérképét
canvas.style.background = "url('ut2.jpg') no-repeat center center";
canvas.style.backgroundSize = "cover";
canvas.style.width = "100%";
canvas.style.height = "40%";

function randNum(min: number, max: number): number {
    // Ensures the minimum and maximum are integers and handles edge cases
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateBalance(amount: number) {
    const newBalance = balance + amount;
    localStorage.setItem('borderControlBalance', newBalance.toString());
    const balanceDiv = document.getElementById('balanceDiv') as HTMLDivElement;
    balanceDiv.innerHTML = `${newBalance} Ft`;
    return newBalance;
}

function updatePrevRoundMessage(text: string, reward: number) {

    localStorage.setItem('prevRoundMessage', text);
    localStorage.setItem('prevRoundReward', String(reward));
    const prevRoundMessage = document.getElementById('prevRoundMessage') as HTMLDivElement;
    const prevRoundReward = document.getElementById('prevRoundReward') as HTMLDivElement;

    prevRoundMessage.innerHTML = text;
    if (reward > 0) {
        prevRoundReward.style.color = "green";
        prevRoundReward.innerHTML = "+" + String(reward) + " Ft";
    }
    else if (reward < 0) {
        prevRoundReward.innerHTML = String(reward) + " Ft";
        prevRoundReward.style.color = "red";
    }
    else {
        prevRoundReward.innerHTML = String(reward) + " Ft";
    }

    return text;
}

// if (!localStorage.getItem('weapons')) {
//     localStorage.setItem('borderControlBalance', '1000');
//     const balanceDiv = document.getElementById('balanceDiv') as HTMLDivElement;
//     balanceDiv.innerHTML = `1000 Ft`;
// } else {
//     const balanceDiv = document.getElementById('balanceDiv') as HTMLDivElement;
//     balanceDiv.innerHTML = `${localStorage.getItem('borderControlBalance')} Ft`;
// }

function saveArrayToLocalStorage(key: string, array: any[]): void {
    // Convert the array to a JSON string
    localStorage.setItem(key, JSON.stringify(array));
}

// Function to get an array from localStorage
function getArrayFromLocalStorage(key: string): any[] {
    // Get the JSON string from localStorage and parse it back to an array
    const storedArray = localStorage.getItem(key);
    return storedArray ? JSON.parse(storedArray) : [];  // Return an empty array if nothing is stored
}





function showData(person: Person, car: Car) {
    personDescript!.innerHTML += person.description;
    emberkep!.innerHTML = `<img class="rounded-circle" src="${person.imgSource}" alt="" />`;
    carDescript!.innerHTML += car.description;
    carColor!.innerHTML += car.color;
    carPlate!.innerHTML += car.licensePlate;
    carModel!.innerHTML += car.model;
    autokep!.innerHTML = `<img id="autokep2" class="border border-0" src="${car.imgSource}" alt="Autó képe" />`;
    carImgSource = car.imgSource;
    console.log(`Betöltött autó kép: ${carImgSource}`);
}

async function loadPersonData() {
    const [person, car] = await generatePersonCarCombination();
    currentPerson = person as Person;
    currentCar = car as Car;
    showData(person as Person, car as Car);

    if (!carImgSource) {
        console.error('Nincs megfelelő kép az adatlapról!');
        return;
    }

    initializeAnimation();
}

async function initializeAnimation() {
    const imageWidth = 100;
    const imageHeight = 100;
    let y = (canvas.height - imageHeight) / 2;
    const speedX = 3;
    const stopX = (canvas.width - imageWidth) / 8;
    const endX = canvas.width * 0.75;
    const imageObject = new ImageObject(-imageWidth, y, imageWidth, imageHeight, carImgSource, speedX, stopX, endX);

    console.log(`Animációhoz használt autó kép forrása: ${carImgSource}`);
    animate(imageObject);

    startButton.addEventListener('click', () => {
        if (currentPerson.warranted.length > 0 || currentCar.warranted.length > 0 || currentCar.smuggler.length > 0) {
            actionText.innerText = "Átengedtél egy bűnözőt!";
            actionText.style.display = "block";
            updateBalance(-1000);
            updatePrevRoundMessage("Átengedtél egy bűnözőt!", -1000);
        }
        else {
            actionText.innerText = "Elengedtél egy ártatlan embert.";
            actionText.style.display = "block";

            updateBalance(1000);
            updatePrevRoundMessage("Elengedtél egy ártatlan embert.", 1000);
        }
        imageObject.moveToEnd();

        setTimeout(() => {
            location.reload();
        }, 2000);

    });

    letartoztatButton.addEventListener('click', async () => {
        if (randNum(1, 10) < 4) {
            quickTimeEventContainer!.style.display = "block";
            let quickTimeEventFinish = await quickTimeEvent(player);
            console.log(quickTimeEventFinish + "a quick time event");

            if (quickTimeEventFinish == true) {
                quickTimeEventContainer!.style.display = "none";
                actionText.innerText = "Lelőtted a támadót!";
            actionText.style.display = "block";

                updateBalance(10000);
                updatePrevRoundMessage("Lelőtted a támadót!", 10000);
            }
            else {
                quickTimeEventContainer!.style.display = "none";
                actionText.innerText = "Meglőttek!";
            actionText.style.display = "block";

                updateBalance(-10000);
                updatePrevRoundMessage("Meglőttek!", -10000);
            }
        }
        else {
            ctx!.clearRect(0, 0, canvas.width, canvas.height);
            if (currentPerson.warranted.length > 0 || currentCar.warranted.length > 0 || currentCar.smuggler.length > 0) {
                actionText.innerText = "Letartóztattál egy bűnözőt!";
            actionText.style.display = "block";

                updateBalance(1000);
                updatePrevRoundMessage("Letartóztattál egy bűnözőt!", 1000);
            }
            else {
                actionText.innerText = "Ártatlan embert tartóztattál le.";
            actionText.style.display = "block";

                updateBalance(-1000);
                updatePrevRoundMessage("Ártatlan embert tartóztattál le.", -1000);
            }
        }

        setTimeout(() => {
            location.reload();
        }, 2000);
    });

    emberadatButton.addEventListener('click', async () => {
        emberadatButton.style.visibility = "hidden";
        if (randNum(1, 10) < 4) {
            quickTimeEventContainer!.style.display = "block";
            let quickTimeEventFinish = await quickTimeEvent(player);
            console.log(quickTimeEventFinish + "a quick time event");

            if (quickTimeEventFinish == true) {
                quickTimeEventContainer!.style.display = "none";
                actionText.innerText = "Lelőtted a támadót!";
            actionText.style.display = "block";

                updateBalance(10000);
                updatePrevRoundMessage("Lelőtted a támadót!", 10000);
                setTimeout(() => {
                    location.reload();
                }, 2000);
            }
            else {
                quickTimeEventContainer!.style.display = "none";
                actionText.innerText = "Meglőttek!";
            actionText.style.display = "block";

                updateBalance(-10000);
                updatePrevRoundMessage("Meglőttek!", -10000);
                setTimeout(() => {
                    location.reload();
                }, 2000);
            }
        }
        else {
            personName!.innerHTML += '<span class="fw-bold">Név: </span>' + currentPerson.name;
            personBorn!.innerHTML += '<span class="fw-bold">Születési dátum: </span>' + currentPerson.age.toString();
            personNationality!.innerHTML += '<span class="fw-bold">Nemzetiség: </span>' + currentPerson.nationality;
            personSex!.innerHTML += '<span class="fw-bold">Neme: </span>' + currentPerson.sex;
            personWarrant!.innerHTML += currentPerson.warranted.length > 0 ? '<span class="fw-bold">Körözött</span>' : '<span class="fw-bold">Nem körözött</span>';
        }
    });

    autoadatButton.addEventListener('click', async () => {
        autoadatButton.style.visibility = "hidden";

        if (randNum(1, 10) < 4) {
            quickTimeEventContainer!.style.display = "block";
            let quickTimeEventFinish = await quickTimeEvent(player);
            console.log(quickTimeEventFinish + "a quick time event");

            if (quickTimeEventFinish == true) {
                quickTimeEventContainer!.style.display = "none";
                actionText.innerText = "Lelőtted a támadót!";
            actionText.style.display = "block";

                updateBalance(10000);
                updatePrevRoundMessage("Lelőtted a támadót!", 10000);
                setTimeout(() => {
                    location.reload();
                }, 2000);
            }
            else {
                quickTimeEventContainer!.style.display = "none";
                actionText.innerText = "Meglőttek!";
            actionText.style.display = "block";

                updateBalance(-10000);
                updatePrevRoundMessage("Meglőttek!", -10000);
                setTimeout(() => {
                    location.reload();
                }, 2000);
            }
        }
        else {
            carWarrant!.innerHTML += currentCar.warranted.length > 0 ? '<span class="fw-bold">Körözött: ' + currentCar.warranted + '</span>' : '<span class="fw-bold">Nem körözött</span>';
        }
    });

    atkutatasButton.addEventListener('click', async () => {
        atkutatasButton.style.visibility = "hidden";
        if (randNum(1, 10) < 4) {
            quickTimeEventContainer!.style.display = "block";
            let quickTimeEventFinish = await quickTimeEvent(player);
            console.log(quickTimeEventFinish + "a quick time event");

            if (quickTimeEventFinish == true) {
                quickTimeEventContainer!.style.display = "none";
                actionText.innerText = "Lelőtted a támadót!";
            actionText.style.display = "block";

                updateBalance(10000);
                updatePrevRoundMessage("Lelőtted a támadót!", 10000);
                setTimeout(() => {
                    location.reload();
                }, 2000);
            }
            else {
                quickTimeEventContainer!.style.display = "none";
                actionText.innerText = "Meglőttek!";
            actionText.style.display = "block";

                updateBalance(-10000);
                updatePrevRoundMessage("Meglőttek!", -10000);
                setTimeout(() => {
                    location.reload();
                }, 2000);
            }
        }
        else {
            if (currentCar.smuggler.length > 0) {
                smugglerText!.innerHTML = '<span class="fw-bold">Ezt találtad: ' + currentCar.smuggler + '</span>'
                if (randNum(1, 3) > 1) {
                    smugglerLet!.style.display = "none";

                }
                else {
                    tF = true;
                    smugglerText2!.innerHTML = 'A csempész ajánlott egy köteg pénzt ha átengeded.';

                }
            }
            else {
                smugglerText!.innerHTML = '<span class="fw-bold">Nem találtál semmi illegálisat</span>';
                smugglerJail!.style.display = "none";
                smugglerLet!.style.display = "block";

            }
            smuggler!.style.display = "block";
            smugglerDiv!.style.display = "flex";


        }

        console.log(tF);
    });

    papirokButton.addEventListener('click', async () => {
        papirokButton.style.visibility = "hidden";
        if (randNum(1, 3) > 1) {
            quickTimeEventContainer!.style.display = "block";
            let quickTimeEventFinish = await quickTimeEvent(player);
            console.log(quickTimeEventFinish + "a quick time event");

            if (quickTimeEventFinish == true) {
                quickTimeEventContainer!.style.display = "none";
                actionText.innerText = "Lelőtted a támadót!";
            actionText.style.display = "block";

                updateBalance(10000);
                updatePrevRoundMessage("Lelőtted a támadót!", 10000);
                setTimeout(() => {
                    location.reload();
                }, 2000);
            }
            else {
                quickTimeEventContainer!.style.display = "none";
                actionText.innerText = "Meglőttek!";
            actionText.style.display = "block";

                updateBalance(-10000);
                updatePrevRoundMessage("Meglőttek!", -10000);
                setTimeout(() => {
                    location.reload();
                }, 2000);
            }
        }
        else {
            carWeight!.innerHTML = '<span class="fw-bold">Súly: </span>' + currentCar.weight;
            carHP!.innerHTML = '<span class="fw-bold">Lóerő: </span>' + currentCar.HP;
        }
    });

    smugglerJail!.addEventListener('click', async () => {
        smugglerDiv!.style.display = "none";

        if (randNum(1, 3) > 1) {
            quickTimeEventContainer!.style.display = "block";
            let quickTimeEventFinish = await quickTimeEvent(player);
            console.log(quickTimeEventFinish + "a quick time event");

            if (quickTimeEventFinish == true) {
                quickTimeEventContainer!.style.display = "none";
                actionText.innerText = "Lelőtted a támadót!";
            actionText.style.display = "block";

                updateBalance(10000);
                updatePrevRoundMessage("Lelőtted a támadót!", 10000);
            }
            else {
                quickTimeEventContainer!.style.display = "none";
                actionText.innerText = "Meglőttek!";
            actionText.style.display = "block";

                updateBalance(-10000);
                updatePrevRoundMessage("Meglőttek!", -10000);
            }
        }
        else {
            actionText.innerText = "Letartóztattál egy bűnözőt!";
            actionText.style.display = "block";

            updateBalance(1000);
            updatePrevRoundMessage("Letartóztattál egy bűnözőt!", 1000);
        }
        smuggler!.style.display = "none";
        smugglerDiv!.style.display = "none";

        setTimeout(() => {
            location.reload();
        }, 2000);
    });

    console.log(`kesobbi: ${tF}`);


    smugglerLet?.addEventListener('click', () => {
        smugglerDiv!.style.display = "none";

        if (currentPerson.warranted.length > 0 || currentCar.warranted.length > 0) {
            actionText.innerText = "Átengedtél egy bűnözőt!";
            actionText.style.display = "block";

            updateBalance(-1000);
            updatePrevRoundMessage("Átengedtél egy bűnözőt!", -1000);
        }

        else {
            actionText.innerText = "Elengedtél egy ártatlan embert.";
            actionText.style.display = "block";

            updateBalance(1000);
            updatePrevRoundMessage("Elengedtél egy ártatlan embert.", 1000);
        }

        if (tF) {
            // smugglerLet!.style.display = "block";


            let amount = randNum(30, 50) * 1000;
            updateBalance(amount);
        }


        smuggler!.style.display = "none";
        smugglerDiv!.style.display = "none";
        imageObject.moveToEnd();

        setTimeout(() => {
            location.reload();
        }, 2000);
    });

    smugglerClose?.addEventListener('click', () => {
        smuggler!.style.display = "none";
        smugglerDiv!.style.display = "none";

    });
}

class ImageObject {
    x: number;
    y: number;
    width: number;
    height: number;
    img: HTMLImageElement;
    speedX: number;
    loaded: boolean = false;
    stopX: number;
    endX: number;

    constructor(x: number, y: number, width: number, height: number, imgSrc: string, speedX: number, stopX: number, endX: number) {
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

    draw(): void {
        if (this.loaded && ctx) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        }
    }

    update(): void {
        if (this.x < this.stopX) {
            this.x += this.speedX;
        }
        this.draw();
    }

    moveToEnd(): void {
        const move = () => {
            if (this.x + this.width < this.endX) {
                this.x += this.speedX;
                this.draw();
                requestAnimationFrame(move);
            } else {
                ctx!.clearRect(0, 0, canvas.width, canvas.height);
            }
        };
        move();
    }
}

function animate(imageObject: ImageObject): void {
    function frame() {
        imageObject.update();
        if (imageObject.x < imageObject.stopX) {
            requestAnimationFrame(frame);
        }
    }
    requestAnimationFrame(frame);
}

function checkSameImgId(ide: string) {
    Array.from(document.getElementsByTagName("img")).forEach(element => {
        if(element.id.slice(0, -3) == ide.slice(0, -7)) {
            return element.src;
        }
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    await loadPersonData();
    console.log(getArrayFromLocalStorage("weapons"));

    document.querySelectorAll(".itemActions").forEach(span => {
        if (getArrayFromLocalStorage("weapons")?.includes(span.id.slice(0, -7))) {
            if (localStorage.getItem("equippedWeapon") && localStorage.getItem("equippedWeapon") == span.id.slice(0, -7)) {
                span.innerHTML = `
                <button class="btn btn-warning">Felszerelve</button>
                <button class="buyBtn btn btn-danger">Birtoklod</button>
            `;
            }
            else {
                span.innerHTML = `
                <button class="useWeapon" id=${checkSameImgId(span.id)}>Használat</button>
                <button class="buyBtn btn btn-danger">Birtoklod</button>
            `;
            }

        }
        else {
            span.innerHTML = `
                <button class="btn btn-secondary">Használat</button>
                <button class="buyBtn" id="${span.id.slice(0, -7)}">Megveszem</button>
            `;
        }
    });

    document.querySelectorAll(".buyBtn").forEach(button => {
        button.addEventListener("click", function () {
            console.log(button.id);
            if (button.id && !getArrayFromLocalStorage("weapons")?.includes(button.id)) {
                let currentWeapons: string[] = getArrayFromLocalStorage('weapons');
                currentWeapons.push(button.id)
                saveArrayToLocalStorage('weapons', currentWeapons);
                // console.log("fegyvert vettél: "+button.id);
                console.log(currentWeapons);
                button.parentElement!.innerHTML = `
                    <button class="useWeapon">Használat</button>
                    <button class="buyBtn btn btn-danger">Birtoklod</button>
                `;
            }
        })
    });

    document.querySelectorAll(".useWeapon").forEach(button => {
        button.addEventListener("click", function () {
            console.log(button.parentElement!.id);
            
                localStorage.setItem("equippedWeapon", button.id);
                button.parentElement!.innerHTML = `
                <button class="btn btn-warning">Felszerelve</button>
                <button class="buyBtn btn btn-danger">Birtoklod</button>
            `;
            
        })
    });
});


