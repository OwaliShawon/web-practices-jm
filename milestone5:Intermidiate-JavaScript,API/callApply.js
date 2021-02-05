const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin',
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount, tips, tax){
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }
}
// normalPerson.chargeBill(1500);
// console.log(normalPerson.salary);

const heroPerson = {
    firstName: 'Hero',
    lastName: 'Balam',
    salary: 25000
}
const friendlyPerson = {
    firstName: 'Lilu',
    lastName: 'Galam',
    salary: 30000
}

// const heroPersonChargeBill = normalPerson.chargeBill.bind(heroPerson);
// heroPersonChargeBill(500);
// console.log(heroPerson.salary);

// normalPerson.chargeBill.call(heroPerson, 900, 100, 9);
// normalPerson.chargeBill.call(heroPerson, 500, 110, 15);
// console.log(heroPerson.salary);

normalPerson.chargeBill.apply(heroPerson, [300, 100, 10]);
console.log(heroPerson.salary);