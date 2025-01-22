import { Person } from "./person";

async function loadJson(): Promise<Person[]> {
    const url: string = "http://localhost:3000/people";
    let response = await fetch(url);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    const users = await response.json();
    return users.map((user: any) => new Person(
        user.id,
        user.name,
        user.nationality,
        user.sex,
        user.age,
        user.warranted,
        user.description,
        user.img
    ));
}


async function processData() {
    try {
        const data = await loadJson();
        console.log(data);
        
        
    }
    catch (error: any) {
        console.error(error.message);
    }
}

processData();