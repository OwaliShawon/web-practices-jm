var student = {id:172-15-9763, phone:01521320960, name:'Owali Shawon'}
var student2 = {id: 9675, phone: 0186456, name: 'pranto'}

var phoneNo1 = student.phone;
var phoneNo2 = student["phone"];
var phonePropName = "phone";
var phoneNo3 = student[phonePropName];
 console.log(phoneNo1);
 console.log(phoneNo2);
 console.log(phoneNo3);


//  updated some property 
student2.phone = 01914629629;
student2["phone"] = 01817536458;
// student2[phonePropName] = 64642135;

student2.varsity = 'DIU'

console.log(student2);




