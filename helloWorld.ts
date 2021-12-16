function hello(string : string){
  console.log("Hello " + string)
}

interface Stark {
  name: string,
  age?: number
}

function printName(stark : Stark){
  console.log(stark.name)
}

printName({name: "Eddard"})
// printName({label: "Eddard"}) is undefined so the interface throws an error.... ? means it is optional in the object


// Properties cannot be declared optionally, however they can implement interfaces with optional properties
class Dog {
  name: string = "Kaya";
  static bone: string = "Milk bone"
  saying: string;

  constructor(){
    this.saying = "Barf"
  }

  hello(person : string){
    console.log("Hello, " + person)
  }
}

var ned = new Dog()
ned.saying = "Woof Woof"

ned.hello("Robert")


class Person {
  name: string;
  constructor(name:string){
    this.name = name
  }

  dance(){
    console.log(this.name + " is dancing")
  }
}

class AwesomePerson extends Person {
  dance(){
    super.dance()  
    console.log("SO AWESOME!")
  }
}

let johnny = new Person("Johnny")
johnny.dance()

let robb = new AwesomePerson("Robb")
robb.dance()



