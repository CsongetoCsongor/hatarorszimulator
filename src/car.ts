class Car {
    public id: number;
    public licensePlate: string;
    public model: string;
    public color: string;
    public traffic_permit: boolean;
    public warranted: string[];
    public smuggler: string[];
    public description: string;
    public imgSource: string;
    public weight: string;
    public HP: string;

    public constructor(id: number, licensePlate: string, model: string, color: string, traffic_permit: boolean, warranted: string[], smuggler: string[], description: string, imgSource: string, weight: string, HP: string) {
        this.id = id;
        this.licensePlate = licensePlate;
        this.model = model;
        this.color = color;
        this.traffic_permit = traffic_permit;
        this.warranted = warranted;
        this.smuggler = smuggler;
        this.description = description;
        this.imgSource = imgSource;
        this.weight = weight;
        this.HP = HP;
    }
}

export default Car;