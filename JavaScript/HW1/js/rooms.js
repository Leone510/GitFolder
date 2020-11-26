const roomsOnFloor = 3;
const floors = 9;
const roomNumber = 2; 

let floor = 0;
let porch;
let counter = 0;

if (roomNumber%floors !== 0) {
   porch = parseInt(roomNumber/(floors*roomsOnFloor))+1
} else {
   porch = parseInt(roomNumber/(floors*roomsOnFloor))
}

for (let i=1; i<=roomNumber; i++ ) {
   for (let j=1; j<roomsOnFloor; j++) {
      if (i !== roomNumber){
         i++
      } else {
         break;
      }
   }

   if (floor < 9) {
      floor++
   } else {
      floor = 1
   }
}

console.log('porch - ', porch);
console.log('floor - ', floor);
