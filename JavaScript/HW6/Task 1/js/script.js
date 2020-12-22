
//------------------------ Task 6.1 ------------------------------

function removeUser(incomingArr, index) {
   incomingArr.splice(index, 1)
}

//------------------------ Task 6.2 ------------------------------

const obj = {name: 'Vasya', age: 1}

function getAllKeys(incomingObject) {
   return Object.keys(incomingObject);
}

//------------------------ Task 6.3 ------------------------------

function getAllValues(incomingObject) {
   return Object.values(incomingObject);
}

//------------------------ Task 6.4 ------------------------------

function insertIntoArr(incomingObject, incomingId) {
   arr.splice(arr.findIndex(obj => obj.id === incomingId), 0, incomingObject)
   console.log(arr);
}

const firstObj = {
   id: 3,
   name: 'Vasya'
}

const secondObj = {
   id: 4,
   name: 'Katya'
}

const arr = [
   {
       id: 1,
       name: 'Kolya'
   },
   {
       id: 2,
       name: 'Petya'
   },
];

//------------------------ Task 6.5 ------------------------------





