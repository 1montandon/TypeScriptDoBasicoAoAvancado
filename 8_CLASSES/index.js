"use strict";
// 1 - campos em classe
class User {
}
const matheus = new User();
console.log(matheus);
matheus.name = "matheus";
// 2 - constructor 
class newUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const joao = new newUser("joao", 22);
console.log(joao);
// 3 - read only
class Car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const fusca = new Car("fusca");
console.log(fusca);
// 4 - heranca e super 
class Machine {
    constructor(name) {
        this.name = name;
    }
}
const trato = new Machine("trator");
class KillerMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
const destroyer = new KillerMachine("destroyer", 4);
console.log(trato);
console.log(destroyer);
// 5 - methods
class Dwarf {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log(`Hey Stranger!, i am ${this.name}`);
    }
}
const jimmy = new Dwarf("Jimmy");
jimmy.greeting();
console.log(jimmy);
// 6 - this
class Truck {
    constructor(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    showDetails() {
        console.log(`Caminhão do modelo: ${this.model}, que tem ${this.hp} cavalos de potência.`);
    }
}
const myTruck = new Truck("Volvo", 400);
myTruck.showDetails();
// 7 - getters
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fullName() {
        return this.name + " " + this.surname;
    }
}
const EduardoMontando = new Person("Eduardo", "Montandon");
console.log(EduardoMontando.fullName);
// 8 - setter
class Coords {
    set fillX(x) {
        if (x === 0) {
            return;
        }
        this.x = x;
        console.log("X inserido com sucesso");
    }
    set fillY(y) {
        if (y === 0) {
            return;
        }
        this.y = y;
        console.log("y inserido com sucesso");
    }
}
const myoCords = new Coords();
myoCords.fillX = 15;
myoCords.fillY = 10;
console.log(myoCords);
class blogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O titulo do post eh ${this.title}`;
    }
}
const myPost = new blogPost("Hello World");
console.log(myPost.itemTitle());
// 10 - override de metodos
class Base {
    someMethod() {
        console.log("alguma coisa");
    }
}
class Novas extends Base {
    someMethod() {
        console.log("testando outra coisa");
    }
}
const myObject = new Novas();
myObject.someMethod();
// 11 - public 
class C {
    constructor() {
        this.x = 10;
    }
}
class D extends C {
}
const cInstance = new D();
console.log(cInstance.x);
// 12 - protected 
class E {
    constructor() {
        this.x = 10;
    }
}
class F extends E {
    showX() {
        console.log("X: " + this.x);
    }
}
const fInstance = new F();
fInstance.showX();
// 13 - private
class PrivateClass {
    constructor() {
        this.name = "Private";
    }
    showName() {
        console.log(this.name);
    }
    privateMethod() {
        console.log("Sou privado!");
    }
    showPrivateMethodResult() {
        this.privateMethod();
    }
}
const pClass = new PrivateClass();
pClass.showName();
pClass.showPrivateMethodResult();
// class TestingPrivate extends PrivateClass {
//   myMethod() {
//     this.privateMethod()
//   }
// }
// 14 - static members
class StaticMembers {
    static method() {
        console.log("metodo statico");
    }
}
StaticMembers.prop = "teste static";
console.log(StaticMembers.prop);
console.log(StaticMembers.method());
// 15 - generic class
class Item {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    get showFirst() {
        return `O first é: ${this.first}`;
    }
}
const newItem = new Item("caixa", "surpresa");
console.log(newItem.showFirst);
// 16 - parameters properties 
class ParametersProperties {
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    get showQty() {
        return `Qty total = ${this.qty}`;
    }
    get showPrice() {
        return `price total = ${this.price}`;
    }
}
const newShirt = new ParametersProperties("Camisa", 5, 6);
console.log(newShirt.name);
console.log(newShirt.showQty);
console.log(newShirt.showPrice);
// 17 - class expressions
const myClass = class {
    constructor(name) {
        this.name = name;
    }
};
const pessoa = new myClass("Jones");
console.log(pessoa);
// 18 - abstract class
class AbstractTest {
}
// const newObj = new AbstractTest()
class AbstractExample extends AbstractTest {
    constructor(name) {
        super();
        this.name = name;
    }
    showName() {
        console.log(`O nome é: ${this.name}`);
    }
}
const newObjAbstract = new AbstractExample("Josias");
newObjAbstract.showName();
