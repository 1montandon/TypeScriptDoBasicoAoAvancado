// 1 - exemplo decorator
function myDecorator(){
  console.log("iniciando decorator")

  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
    console.log('executando decorator')
    console.log(target)
    console.log(propertyKey)
    console.log(descriptor)
    
  }

}
class myClass{
  @myDecorator()
  testing(){
    console.log("terminando execucao do metodo")
  }
}

const myObj = new myClass();

myObj.testing()


// 2 - multiplos decorators
function a(){
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("executou a")
  }
}

function b(){
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("executou b")
  }
}

class MultipleDecorators{
  @b()
  @a()
  testing(){
    console.log("terminando execucao")
  }
}

const multiple = new MultipleDecorators()

multiple.testing()


// 3 - class decorator
function classDec(constructor: Function){
  console.log(constructor);
  if(constructor.name === "User"){
    console.log("Criando usuario!")
  }
}

@classDec
class User {
  name

  constructor(name: string){
    this.name = name
  }
}

const eduardo = new User("eduardo")

console.log(eduardo)

// 4 - method decorator 
function enumerable (value: boolean){
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    descriptor.enumerable = value
  }
}
class Machine {
  name

  constructor(name: string){
    this.name = name
  }

  @enumerable(false)
  showName(){
    return `o nome da maquina e ${this.name}`
  }
}

const trator = new Machine("trator")
console.log(trator.showName())

// 5 - acessor decorator
class Monster {
  name?
  age?

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  @enumerable(true)
  get showName() {
    return `Nome do monstro: ${this.name}`
  }

  @enumerable(false)
  get showAge() {
    return `Idade do monstro: ${this.age}`
  }
}

const charmander = new Monster("Charmander", 10)

console.log(charmander)

// 6 - property decorator
function formatNumber() {
  return function(target: Object, propertyKey: string) { 
    let value : string;

    const getter = function() {
      return value;
    };
    const setter = function(newVal: string) {
      value = newVal.padStart(5, "0")
    };

    Object.defineProperty(target, propertyKey, {
      set: setter,
      get: getter
    }); 
  }
}

class ID {
  @formatNumber()
  id

  constructor(id: string) {
    this.id = id
  }
}

const newItem = new ID("1")

console.log(newItem.id)

// 7 - exemplo real de class decorator
function createdDate(created: Function) {
  created.prototype.createdAt = new Date();
}

@createdDate
class Book {
  id

  constructor(id: number) {
    this.id = id
  }
}

@createdDate
class Pen {
  id

  constructor(id: number) {
    this.id = id
  }
}

const newBook = new Book(1)

console.log(newBook)

// 8 - exemplo real method decorator
function checkIfUserPosted() {
  return function (
    target: Object,
    key: string | symbol,
    descriptor: PropertyDescriptor
  ) {
    const childFunction = descriptor.value;
    descriptor.value = function(...args: any[]) {
      if (args[1] === true) {
        console.log("Usuário já postou!")
        return null;
      } else {
        return childFunction.apply(this, args);
      }
    }
    return descriptor;
  };
}

class Post {
  alreadyPosted = false

  @checkIfUserPosted()
  post(content: string, alreadyPosted: boolean) {
    this.alreadyPosted = true
    console.log(`Post do usuário: ${content}`)
  }
}

const somePost = new Post()

somePost.post("Meu primeiro post!", somePost.alreadyPosted)

somePost.post("Meu segundo post!", somePost.alreadyPosted)


// 9 - exemplo real property decorator
function Max(limit: number){
  return function(target: Object, propertyKey: string){

    let value:string

    const getter = function() {
      return value
    }

    const setter = function(newVal: string){
      if(newVal.length > limit){
        console.log(`o valor deve ter no maximo ${limit} digitos`)
      }
      else {
        value = newVal
      }
    }

    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter
    })


  }
}
class Admin{
  @Max(10)
  username;

  constructor(username:string){
    this.username = username
  }
}

const pedro = new Admin('pedroAdmin123446')