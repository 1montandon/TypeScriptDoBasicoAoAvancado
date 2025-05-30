"use strict";
// 1 - Generics
function showData(arg) {
    return `O dado é: ${arg}`;
}
console.log(showData(5));
console.log(showData('teste'));
// 2 - constraint em generic
function showProductName(obj) {
    return `O nome do produto é: ${obj.name}`;
}
const myObj = { name: 'Porta', cor: 'Branca' };
const secondObj = { name: 'Carro', rodas: 4 };
const thirdObj = { price: 19.99, qty: 10 };
console.log(showProductName(myObj));
console.log(showProductName(secondObj));
const myCar = { name: 'Fusca', wheels: 4, engine: 1 };
const myPen = { name: 'Caneta Bic', wheels: false, engine: false };
console.log(myCar);
console.log(myPen);
// 4 - type parameters
function getSomeKey(obj, key) {
    return `A chave ${obj} tem o valor ${obj[key]}`;
}
const server = {
    hd: '2TB',
    ram: '32GB',
};
console.log(getSomeKey(server, 'ram'));
function showCharName(obj, name) {
    return `${obj[name]}`;
}
const myChar = {
    name: 'Matheus',
    age: 30,
    hasDriveLicense: true,
};
console.log(showCharName(myChar, 'name'));
// console.log(showCharName([0]))
// 6 - type of type operator
const userName = "Eduardo";
const userName2 = " Joao";
const userName4 = 'Joaquim';
const newTruck = {
    km: 10000,
    kg: 5000,
    description: "Caminhao de pouca carga"
};
function showKm(km) {
    console.log(`o vaiculo a tem km de ${km}`);
}
showKm(newTruck.km);
const someVar = 1;
// const someVar2: myType = 'asd'
