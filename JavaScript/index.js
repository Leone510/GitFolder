var counter = 2;
var studentAmountInRoom;
var student_amount_in_room = 16;
let amountOfUsers = 16;
const name = 'Vasia'

console.log(name)

//-------------------------------

const user = {
   name: 'Ivan',
   lastName: 'Ivanov',
   age: 20
}
console.log('Befor init: ', user.age)
const secondUser = user;
console.log('Befor init: ', secondUser.age)
user.age = 23;
console.log('now init: ', user.age)
console.log('now init: ', secondUser.age)