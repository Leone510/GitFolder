function Emploee (id, name, surname, salary, experience, privileges, gender) {
   this.id = id;
   this.name = name;
   this.surname = surname;
   this.salary = salary;
   this.workExperience = experience;
   this.isPrivileges = privileges;
   this.gender = gender;
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
console.log(getFullNamesFromArr(emplyeeConstructArr));





