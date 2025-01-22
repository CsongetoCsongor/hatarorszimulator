class Player {
    public score: number;
    public mood: string;
    public facePack: string[];
    public face: string;
    public gunSkin: string;

    public constructor(score: number, mood: string, facePack: string[], face: string, gunSkin: string) {
        this.score = score;
        this.mood = mood;
        this.facePack = facePack;
        this.face = this.getFaceExpression();
        this.gunSkin = gunSkin;
    }

    public getFaceExpression(): string {
        if(this.mood == "neutral") {
            return this.facePack[0];
        }
        else if(this.mood == "angry") {
            return this.facePack[1];
        }
        else return "";
    }
}

export default { Player };