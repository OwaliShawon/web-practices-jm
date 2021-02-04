var age = [12, 17, 20, 25];
age[1] = 30;
console.log(age[2]);
console.log(age[1]);

var position = age.indexOf(25);

age.push(100);
console.log(age.length);
age.pop();
console.log(age);


// tealine
var tealine = ['kalam', 'Salam', 'Jalam'];
tealine.push('alam');
console.log(tealine);
tealine.shift('kalam');
console.log(tealine);

var part = tealine.slice(1);
console.log(part);








