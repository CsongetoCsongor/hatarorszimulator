"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const person_1 = require("./person");
function loadJson() {
    return __awaiter(this, void 0, void 0, function* () {
        const url = "http://localhost:3000/people";
        let response = yield fetch(url);
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const users = yield response.json();
        return users.map((user) => new person_1.Person(user.id, user.name, user.nationality, user.sex, user.age, user.warranted, user.description, user.img));
    });
}
function processData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield loadJson();
            console.log(data);
        }
        catch (error) {
            console.error(error.message);
        }
    });
}
processData();
