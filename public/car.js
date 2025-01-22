"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
class Car {
    constructor(id, licenseePlate, model, color, warranted, smuggler, description, imgSource) {
        this.id = id;
        this.licenseePlate = licenseePlate;
        this.model = model;
        this.color = color;
        this.warranted = warranted;
        this.smuggler = smuggler;
        this.description = description;
        this.imgSource = imgSource;
    }
}
exports.Car = Car;
