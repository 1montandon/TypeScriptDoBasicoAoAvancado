"use strict";
// 1 - type guard
function sum(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    }
    else {
        console.log("impossivel realizar a soma!");
    }
}
sum("4", 2);
// 3 - instance of
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
    }
}
const jhon = new User("jhon");
const paul = new SuperUser("paul");
function userGreeting(user) {
    if (user instanceof SuperUser) {
        console.log(`Ola ${user.name}, ADM`);
    }
    else if (user instanceof User) {
        console.log(`Ola ${user.name}`);
    }
}
// 4 - operador in 
class Dog {
    constructor(name, bread) {
        this.name = name;
        if (bread) {
            this.bread = bread;
        }
    }
}
const pitucha = new Dog("Pitucha");
const aurora = new Dog("Aurora", "Labrador");
function showDogDetails(dog) {
    if ('bread' in dog) {
        console.log(`O cachorro eh da raca ${dog.bread}`);
    }
    else {
        console.log('SRD');
    }
}
showDogDetails(pitucha);
showDogDetails(aurora);
