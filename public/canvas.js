"use strict";
const canvas = document.getElementById('animationCanvas');
const ctx = canvas.getContext('2d');
// Méretezés a képernyőhöz
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    adjustImagePosition();
}
// Háttérkép betöltése
const background = new Image();
background.src = 'ut.webp'; // Helyettesítsd a kívánt háttérkép URL-jével
// Kép osztály
class ImageObject {
    constructor(x, y, width, height, imgSrc, speedX) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.img = new Image();
        this.img.src = imgSrc;
        this.speedX = speedX;
    }
    draw() {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
    update() {
        // Mozgatás balról jobbra, megáll a képernyő jobb szélén
        if (this.x + this.width < canvas.width) {
            this.x += this.speedX;
        }
        this.draw();
    }
}
// Egyetlen kép létrehozása
const imageWidth = 100;
const imageHeight = 100;
let y = (canvas.height - imageHeight) / 2; // Kép középre helyezése függőlegesen
const speedX = 3;
const imageObject = new ImageObject(-imageWidth, y, imageWidth, imageHeight, './terv/határőr_terv.png', speedX);
// Frissítse a kép helyzetét a canvas méretének változásakor
function adjustImagePosition() {
    y = (canvas.height - imageHeight) / 2;
    imageObject.y = y;
}
// Animációs ciklus
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Háttérkép kirajzolása
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
    imageObject.update();
    requestAnimationFrame(animate);
}
// Amikor a háttérkép betöltődik, indítjuk az animációt
background.onload = () => {
    animate();
};
// Ablakméret változás kezelése
window.addEventListener('resize', () => {
    resizeCanvas();
});
// Az inicializáláskor beállítjuk a canvas méretét
resizeCanvas();
