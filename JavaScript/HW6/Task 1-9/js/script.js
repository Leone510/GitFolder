
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

class Condidate {
   constructor(candidate) {
      Object.assign(this, candidate)
      console.log(this)
   }

   state = () => this.address.split(', ')[2];
}

//------------------------ Task 6.6 ------------------------------

function getCompanyNames() {
   let companys = [];
   condidateArr.forEach(element => {
      if(!companys.some(item => item === element.company)) {
         companys.push(element.company)
      }
   });
   return companys;
}

//------------------------ Task 6.7 ------------------------------

function getUsersByYear(year) {
   let filteredByYear = condidateArr.filter(item => item.registered.split('-')[0] == year);
   return filteredByYear.map(item => item._id);
}

//------------------------ Task 6.8 ------------------------------

function getCondidatesByUnreadMsg(num) {
   return condidateArr.filter(item => item.greeting.match(/\d+/) == num);
}

//------------------------ Task 6.9 ------------------------------

function getCondidatesByGender(gen) {
   return condidateArr.filter(item => item.gender === gen);
}

//------------------------ Task 6.10 Reduce ------------------------

let customReduce = function (collback, accValue) {
   let index = 0;
   if (accValue === undefined) {
      accValue = this[0];
      index++;
   }
   
   for ( ; index!=this.length; index++) {
      accValue = collback(accValue, this[index], index, this)
   }
   return accValue;
}

Object.defineProperty(Array.prototype, 'customReduce', {
   value: customReduce,
   enumerable: false,
})

let arrSixTen = [1, 2, 3, 4, 5];

// console.log(arrSixTen.reduce((sum, elem) => sum + elem, 0));
// console.log(arrSixTen.customReduce((sum, elem) => sum + elem, 0))

//------------------------ Task 6.10 Join --------------------------

let customJoin = function (sumbol) {
   let resultString = '';
   let separator = ',';
   if (sumbol != undefined) {
      separator = sumbol.toString()
   }

   for (let i=0; i<this.length; i++) {
      if (i === this.length - 1) {
         return resultString += this[i].toString();
      }
      resultString += this[i].toString() + separator;
   }
}

Object.defineProperty(Array.prototype, 'customJoin', {
   value: customJoin,
   enumerable: false,
})


console.log(arrSixTen.join('-'));
console.log(arrSixTen.customJoin('-'));


