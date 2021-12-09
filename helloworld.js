var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function hello(string) {
    console.log("Hello " + string);
}
function printName(stark) {
    console.log(stark.name);
}
printName({ name: "Eddard" });
// printName({label: "Eddard"}) is undefined so the interface throws an error.... ? means it is optional in the object
// Properties cannot be declared optionally, however they can implement interfaces with optional properties
var Dog = /** @class */ (function () {
    function Dog() {
        this.name = "Kaya";
        this.saying = "Barf";
    }
    Dog.prototype.hello = function (person) {
        console.log("Hello, " + person);
    };
    Dog.bone = "Milk bone";
    return Dog;
}());
var ned = new Dog();
ned.saying = "Woof Woof";
ned.hello("Robert");
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.dance = function () {
        console.log(this.name + " is dancing");
    };
    return Person;
}());
var AwesomePerson = /** @class */ (function (_super) {
    __extends(AwesomePerson, _super);
    function AwesomePerson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AwesomePerson.prototype.dance = function () {
        _super.prototype.dance.call(this);
        console.log("SO AWESOME!");
    };
    return AwesomePerson;
}(Person));
var johnny = new Person("Johnny");
johnny.dance();
var robb = new AwesomePerson("Robb");
robb.dance();
