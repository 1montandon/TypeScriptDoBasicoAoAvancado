// 1 - campos em classe
class User {
  name!: string
  age!: number
}

const matheus = new User()

console.log(matheus)

matheus.name = "matheus"

// 2 - constructor 
class newUser{
  name
  age

  constructor(name: string, age: number){
    this.name = name
    this.age = age 
  }
}

const joao = new newUser("joao", 22)

console.log(joao)

// 3 - read only
class Car {
  name
  readonly wheels = 4 
  constructor(name: string){
    this.name = name
  }
}

const fusca = new Car("fusca")

console.log(fusca)

// 4 - heranca e super 
class Machine{
  name

  constructor(name: string){
    this.name = name
  }
}
const trato = new Machine("trator")

class KillerMachine extends Machine{
  guns

  constructor(name: string, guns: number){
    super(name)
    this.guns = guns
  }
}
const destroyer = new KillerMachine("destroyer", 4)

console.log(trato)
console.log(destroyer)

// 5 - methods

class Dwarf {
  name

  constructor(name: string){
    this.name = name
  }

  greeting(){
    console.log(`Hey Stranger!, i am ${this.name}`)
  }
}

const jimmy = new Dwarf("Jimmy")

jimmy.greeting()
console.log(jimmy)

// 6 - this
class Truck {
  model
  hp

  constructor(model: string, hp: number){
    this.model = model
    this.hp = hp
  }

  showDetails(){
    console.log(`Caminhão do modelo: ${this.model}, que tem ${this.hp} cavalos de potência.`)
  }
}

const myTruck = new Truck("Volvo", 400)

myTruck.showDetails()

// 7 - getters
class Person {
  name
  surname

  constructor(name: string, surname: string){
    this.name = name
    this.surname = surname
  }
  get fullName() {
    return this.name + " " + this.surname
  }
}

const EduardoMontando = new Person("Eduardo", "Montandon")

console.log(EduardoMontando.fullName)

// 8 - setter
class Coords {
  x!: number
  y!: number

  set fillX(x: number){
    if(x === 0 ){
      return
    }
    
    this.x = x 

    console.log("X inserido com sucesso")
  }
  set fillY(y: number){
    if(y === 0 ){
      return
    }
    
    this.y = y 

    console.log("y inserido com sucesso")
  }
}

const myoCords = new Coords()

myoCords.fillX = 15
myoCords.fillY = 10

console.log(myoCords)

// 9 - implements 
interface showTitle{
  itemTitle(): string
}

class blogPost implements showTitle{
  title

  constructor(title: string){
    this.title = title
  }

  itemTitle(): string {
      return `O titulo do post eh ${this.title}`
  }
}

const myPost = new blogPost("Hello World")

console.log(myPost.itemTitle())

// 10 - override de metodos
class Base {
  someMethod(){
    console.log("alguma coisa")
  }
}

class Novas extends Base{
  someMethod(){
    console.log("testando outra coisa")
  }
}

const myObject = new Novas()

myObject.someMethod()

// 11 - public 
class C {
  public x = 10 
}

class D extends C{

}
const cInstance = new D()

console.log(cInstance.x)

// 12 - protected 
class E {
  protected x = 10                                                                            
}

class F extends E {
  
  showX(){
    console.log("X: " + this.x)
  }

}

const fInstance = new F()

fInstance.showX()

// 13 - private
class PrivateClass {
  private name = "Private"

  showName() {
    console.log(this.name)
  }

  private privateMethod() {
    console.log("Sou privado!")
  }

  showPrivateMethodResult() {
    this.privateMethod()
  }
}

const pClass = new PrivateClass()

pClass.showName()

pClass.showPrivateMethodResult()

// class TestingPrivate extends PrivateClass {
//   myMethod() {
//     this.privateMethod()
//   }
// }

// 14 - static members
class StaticMembers {
  static prop = "teste static"
  static method(){
    console.log("metodo statico")
  }
}

console.log(StaticMembers.prop)
console.log(StaticMembers.method())

// 15 - generic class
class Item<T, U> {
  first
  second

  constructor(first: T, second: U) {
    this.first = first
    this.second = second
  }

  get showFirst() {
    return `O first é: ${this.first}`
  }
}

const newItem = new Item("caixa", "surpresa")

console.log(newItem.showFirst)

// 16 - parameters properties 
class ParametersProperties{
  constructor(public name:string, private qty: number, private price: number){
    this.name = name
    this.qty = qty
    this.price = price
  }
  get showQty(){
    return `Qty total = ${this.qty}`  
  }
  get showPrice(){
    return `price total = ${this.price}`  
  }
}

const newShirt = new ParametersProperties("Camisa", 5, 6)

console.log(newShirt.name)
console.log(newShirt.showQty)
console.log(newShirt.showPrice)

// 17 - class expressions
const myClass = class<T>{
  name

  constructor(name: T){
    this.name = name
  }
}

const pessoa = new myClass("Jones");

console.log(pessoa)

// 18 - abstract class
abstract class AbstractTest {
  abstract showName(): void
}

// const newObj = new AbstractTest()

class AbstractExample extends AbstractTest {
  name: string

  constructor(name: string) {
    super()
    this.name = name
  }

  showName() {
    console.log(`O nome é: ${this.name}`)
  }
}

const newObjAbstract = new AbstractExample("Josias")

newObjAbstract.showName()


