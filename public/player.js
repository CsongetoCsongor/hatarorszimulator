"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
class Player {
    constructor(score, mood, facePack, face, gunSkin) {
        this.score = score;
        this.mood = mood;
        this.facePack = facePack;
        this.face = this.getFaceExpression();
        this.gunSkin = gunSkin;
    }
    getFaceExpression() {
        if (this.mood == "neutral") {
            return this.facePack[0];
        }
        else if (this.mood == "angry") {
            return this.facePack[1];
        }
        else
            return "";
    }
}
exports.Player = Player;
