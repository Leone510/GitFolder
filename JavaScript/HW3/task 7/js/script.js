function Emploee (obj) {
   this.id = obj.id;
   this.name = obj.name;
   this.surname = obj.surname;
   this.salary = obj.salary;
   this.workExperience = obj.workExperience;
   this.isPrivileges = obj.isPrivileges;
   this.gender = obj.gender;

   Object.defineProperty(this, 'fullInfo', {
      get: function() {
         return `id - ${this.id}, name - ${this.name}, surname - ${this.surname}`
      },
      set: function(newObj) {
         for (let key in newObj){
            if ([key] in this) {
               this[key] = newObj[key];
            } else {continue;}
         }
      } 
   })
}

Emploee.prototype.getFullName = function () {
   return this.surname + ' ' + this.name;
}

let employeeObj = new Emploee (0, 'Valeriy', 'Zhmishenko', 1000, 10, true, 'male');

let createEmployesFromArr = (arr) => {
   let newArr = [];
   for (let args of arr) {
      employeeObj = new Emploee (args)
      newArr.push(employeeObj);
   }
   return newArr;
};
const emplyeeConstructArr = createEmployesFromArr(emplyeeArr); 

const getFullNamesFromArr = (arr) => {
   let newArr = [];
   for (let hum of arr) {
      newArr.push(hum.getFullName());
   }
   return newArr;
}
// console.log(getFullNamesFromArr(emplyeeConstructArr));

const getMiddleSalary = (arr) => {
   let sum = 0;
   for (let hum of arr) {
      sum += hum.salary;
      console.log(sum);
   }
   return sum/arr.length;
}
// console.log (getMiddleSalary(emplyeeConstructArr)); /// 1560

const getRandomEmployee = (arr) => {
   let rand = 1 + Math.random()*arr.length;
   return arr[(Math.floor(rand))-1];
}
// console.log(getRandomEmployee(emplyeeConstructArr));




