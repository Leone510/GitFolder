function Emploee (obj) {
   this.id = obj.id;
   this.name = obj.name;
   this.surname = obj.surname;
   this.salary = obj.salary;
   this.workExperience = obj.workExperience;
   this.isPrivileges = obj.isPrivileges;
   this.gender = obj.gender;
}

Emploee.prototype.getFullName = function () {
   return this.surname + ' ' + this.name;
}

let employeeObj = new Emploee ({
   id: 0,
   name: 'Valeriy',
   surname: 'Zhmishenko',
   salary: 1000,
   workExperience: 10,
   isPrivileges: true,
   gender: 'male'});

let createEmployesFromArr = (arr) => {
   let newArr = [];
   for (let args of arr) {
      employeeObj = new Emploee (args)
      newArr.push(employeeObj);
   }
   return newArr;
};
const emplyeeConstructArr = createEmployesFromArr(emplyeeArr); 

console.log(emplyeeConstructArr);



