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

let carImgSource: string;

const personDescript = document.getElementById("personDescript");
const emberkep = document.getElementById("emberkep");
const carDescript = document.getElementById("carDescript");
const carColor = document.getElementById("carColor");
const carPlate = document.getElementById("carPlate");
const carModel = document.getElementById("carModel");
const autokep = document.getElementById("autokepAdatlap");
const canvas = document.getElementById('animationCanvas') as HTMLCanvasElement;
const ctx = canvas?.getContext('2d');
const startButton = document.getElementById('startBgdiv') as HTMLButtonElement;
const letartoztatButton = document.getElementById('letartoztatdiv') as HTMLButtonElement;
const actionText = document.getElementById('actionText') as HTMLDivElement;
const message = document.getElementById('message') as HTMLDivElement;
const auto = document.getElementById('auto') as HTMLDivElement;

// Beállítjuk a canvas háttérképét
canvas.style.background = "url('ut2.jpg') no-repeat center center";
canvas.style.backgroundSize = "cover";
canvas.style.width = "100%";    
canvas.style.height = "40%";    


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
    showData(person as Person, car as Car);

    if (!carImgSource) {
        console.error('Nincs megfelelő kép az adatlapról!');
        return;
    }

    initializeAnimation();
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
        
        ctx!.clearRect(0, 0, canvas.width, canvas.height);
        actionText.innerText = "Letartóztattad a kriminális bűnözőt!";

        
        setTimeout(() => {
            location.reload();
        }, 2000);
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

document.addEventListener('DOMContentLoaded', async () => {
    await loadPersonData();
});


