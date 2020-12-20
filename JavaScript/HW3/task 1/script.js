function Emploee (obj) {
   this.id = obj.id;
   this.name = obj.name;
   this.surname = obj.surname;
   this.salary = obj.salary;
   this.workExperience = obj.workExperience;
   this.isPrivileges = obj.isPrivileges;
   this.gender = obj.gender;
}

const employeeObj = new Emploee ({
   id: 0,
   name: 'Valeriy',
   surname: 'Zhmishenko',
   salary: 1000,
   workExperience: 10,
   isPrivileges: true,
   gender: 'male'});

console.log(employeeObj);


