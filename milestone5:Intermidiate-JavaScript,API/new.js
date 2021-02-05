class Person {
    constructor (firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroPerson = new Person('Hero', 'Balam', 2000);
console.log(heroPerson);
const friendlyPerson = new Person('Hero', 'Kalam', 25000);
console.log(friendlyPerson);


// agerdine class keyword chilo na tai fuction diye ei kaj kora hoito
function Person1(firstName, lastName, salary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
}
const oldPerson = new Person1('akkas', 'miahhh', 2000);
console.log(oldPerson);