class Car {
    public id: number;
    public licenseePlate: string;
    public model: string;
    public color: string;
    public warranted: string[];
    public smuggler: string[];
    public description: string;
    public imgSource: string;

    public constructor(id: number, licenseePlate: string, model: string, color: string, warranted: string[], smuggler: string[], description: string, imgSource: string) {
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

export { Car };