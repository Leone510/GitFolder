let id = 1;
let studlist = [];
let candidate = [];
let idNotPaid = [];

class Student {
   constructor(enrollee){
      let student = {
         id: id++,
         name: enrollee.name,
         surname: enrollee.surname,
         ratingPoint: enrollee.ratingPoint,
         schoolPoint: enrollee.schoolPoint,
         isSelfPayment: true,   
      };

      studlist.push(student);
      
      function toCandidate() {
         if (student.ratingPoint >= 800) {
            candidate.push(student);
            candidate.sort(function(a, b) {
               return b.ratingPoint - a.ratingPoint
            })
         }
      }
      toCandidate();

      //------------------------------------------------------------
      
      function selfPaid (arr) {
         let lastChanse = [candidate[4]];
         let peoplesChanse = 1;
         let notPaidId = [];
         if (candidate.length < 5) {
            for  (let key of candidate) {
               key.isSelfPayment = false;
            }
            return;
         }
         for (let i=4; i>=0; i--) {
            if (candidate[i].ratingPoint !== candidate[i-1].ratingPoint ) {
               break;
            }
            lastChanse.unshift(candidate[i-1]);
            peoplesChanse++
         }
         for (let i=4; i<candidate.length-1; i++) {
            if (candidate[i].ratingPoint !== candidate[i+1].ratingPoint) {
               break;
            }
            lastChanse.push(candidate[i+1]);
         }
            
         lastChanse.sort(function(a, b) {return b.schoolPoint - a.schoolPoint})
         
         for (let i=0; i<=4-peoplesChanse; i++) {
            notPaidId.push(candidate[i].id)
         }
         for (let i=0; i<=peoplesChanse-1; i++) {
            notPaidId.push(lastChanse[i].id)
         }
         
         for (let key of arr) {
            key.isSelfPayment = true;
            for (let num of notPaidId) {
               if (key.id === num){
                  key.isSelfPayment = false;
                  break;
               }
            }
         }
         idNotPaid = notPaidId;
      };
      selfPaid(studlist);
   }
   
//----------------------------------------------------------------

   static listOfStudens = studlist;
}

//------ Connection Students File ------------------
for (let stud of enrollee) {
   new Student (stud);
}

// for (let stud of newStudentArr) {
//    new Student (stud);
// }
//---------------------------------------------------


console.log(`Not Paid Id: ${idNotPaid}`)






















//----------------------------------------------------------------
//---------------------First Wrong Version------------------------
//----------------------------------------------------------------

// let id = 1;
// let student = {};
// let studArr = [];
// let candidate = [];


// class Student {
//    constructor(enrollee){
//       this.id = id++;
//       this.name = enrollee.name;
//       this.surname = enrollee.surname;
//       this.ratingPoint = enrollee.ratingPoint;
//       this.schoolPoint = enrollee.schoolPoint;
//       this.isSelfPayment = true;
//    }

//    static listOfStudens() {
//       return studArr;
//    }
// }

// let chelik = new Student({ 
//    name: 'Valeriy',
//    surname: 'Golovanov',
//    ratingPoint: 820,
//    schoolPoint: 310,
// });
// studArr.push(chelik)

// for (let stud of enrollee) {
//    student = new Student (stud);
//    studArr.push(student);
//    if (stud.ratingPoint >=800) {
//       candidate.push(student);
//    }
// }

// candidate.sort(function(a, b) {return b.ratingPoint - a.ratingPoint})

// let selfPaid = (arr) => {
//    let lastChanse = [candidate[4]];
//    let peoplesChanse = 1;
//    let notPaidId = [];
//    for (let i=4; i>=0; i--) {
//       if (candidate[i].ratingPoint !== candidate[i-1].ratingPoint) {
//          break;
//       }
//       lastChanse.unshift(candidate[i-1]);
//       peoplesChanse++
//    }
//    for (let i=4; i<candidate.length; i++) {
//       if (candidate[i].ratingPoint !== candidate[i+1].ratingPoint) {
//          break;
//       }
//       lastChanse.push(candidate[i+1]);
//    }
   
//    lastChanse.sort(function(a, b) {return b.schoolPoint - a.schoolPoint})

//    for (let i=0; i<=4-peoplesChanse; i++) {
//       notPaidId.push(candidate[i].id)
//    }
//    for (let i=0; i<=peoplesChanse-1; i++) {
//       notPaidId.push(lastChanse[i].id)
//    }

//    for (let key of arr) {
//       key.isSelfPayment = true;
//       for (let num of notPaidId) {
//          if (key.id === num){
//             key.isSelfPayment = false;
//             break;
//          }
//       }
//    }

//    console.log('not paid: ',notPaidId);
//    return lastChanse;
// }
// console.log(selfPaid(studArr));

// console.log('candidate: ',candidate);
// console.log(Student.listOfStudens());