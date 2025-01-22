class Person {
    public id: number;
    public name: string;
    public nationality: string;
    public sex: string;
    public age: number;
    public warranted: string[];
    public description: string;
    public imgSource: string;

    public constructor(id: number, name: string, nationality: string, sex: string, age: number, warranted: string[], description: string, imgSource: string) {
        this.id = id;
        this.name = name;
        this.nationality = nationality;
        this.sex = sex;
        this.age = age;
        this.warranted = warranted;
        this.description = description;
        this.imgSource = imgSource;
    }
}

export default  Person ;