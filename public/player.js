class Player {
    constructor(score, mood, facePack, gunSkin) {
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
export default Player;
