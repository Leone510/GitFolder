function Emploee (id, name, surname, salary, experience, privileges, gender) {
   this.id = id;
   this.name = name;
   this.surname = surname;
   this.salary = salary;
   this.workExperience = experience;
   this.isPrivileges = privileges;
   this.gender = gender;

   Object.defineProperty(this, 'fullInfo', {
      get function(){
         let lineInfo = [];
         for (let key in this){
            lineInfo.push(key + ' - ' [key])
         }
         return 123;
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
      employeeObj = new Emploee (args.id, args.name, args.surname, args.salary, args.workExperience, args.isPrivileges, args.gender)
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








