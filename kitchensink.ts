// This is my name
let myName: string = "Amara";

// constant set to number of states
const numOfStates: number = 50;

// adding 5 to 4 and storing the result
let result: number = 5 + 4;

function sayHello(): void {
    alert("Hello World");
}

sayHello();




function checkAge(name: string, age: number): void {
    if (age < 21) {
        alert("Sorry " + name + ", you aren't old enough to view this page!");
    }
}

checkAge("Charles", 21);
checkAge("Abby", 27);
checkAge("James", 18);
checkAge("John", 17);

let myFavVeggies: string[] = ["Broccoli", "Peas", "Carrot", "Radish", "Corn"];

for (let index = 0; index <= 4; index++) {
    console.log(myFavVeggies[index])
}

type Pet = {
    name: string
    breed: string
}

let pet: Pet = {
    name: "Emmy",
    breed: "German Shepard"
};

console.log(pet.name, pet.breed);

interface person {
    name: string, 
    age: number
}

let people: person[] =  [
    {
        name: "Ryan",
        age: 25
    },
    {
        name: "Meghan",
        age: 22
    },
    {
        name: "Sarah",
        age: 26
    },
    {
        name: "Benny",
        age: 3
    },
    {
        name: "Pete",
        age: 29
    }
]


for (let index = 0; index < people.length; index++) {
    checkAge(people[index].name, people[index].age);
}

function getLength(word: string): number {
    return word.length;
}

let wordLength: number = getLength("Hello World");

if (wordLength % 2 == 0) {
    console.log("The world is nice and even!")
} else {
    console.log("The world is an odd place!")
}