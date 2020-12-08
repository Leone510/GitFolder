function Emploee (id, name, surname, salary, experience, privileges, gender) {
   this.id = id;
   this.name = name;
   this.surname = surname;
   this.salary = salary;
   this.workExperience = experience;
   this.isPrivileges =privileges;
   this.gender = gender;
}

const employeeObj = new Emploee (0, 'Valeriy', 'Zhmishenko', 1000, 10, true, 'male');

console.log(employeeObj);


