let id = 1;
let studentsArrDone = [];
let enrollee;

let qwe = {};
let asd = [];


class Student {
   constructor(studentsArr, id, arr){
      this.id = id;
      this.name = studentsArr.name;
      this.surname = studentsArr.surname;
      this.ratingPoint = studentsArr.ratingPoint;
      this.schoolPoint = studentsArr.schoolPoint;
   }

   static listOfStudens = function () {
      return 1;
   }
}

let createEnrolleeArr = (studentsArr) => {
   let enrolleeArr = [];
   for (let stud of studentsArr) {
      enrollee = new Student (stud, id++, asd);
      enrolleeArr.push(enrollee);
   }
   return enrolleeArr;
}

new Student({ 
   name: 'Valeriy',
   surname: 'Golovanov',
   ratingPoint: 500,
   schoolPoint: 200,
});

console.log(createEnrolleeArr(studentsArr, id, asd));
console.log(Student.listOfStudents);
console.log(asd)





