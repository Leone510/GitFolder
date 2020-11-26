const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;

let ReamPaperWeek = consumptionPerWeek / sheetsInReamPaper;
let minReamPaper = parseInt(weeksAmount * ReamPaperWeek)
if (weeksAmount * ReamPaperWeek - minReamPaper != 0) {
   minReamPaper++
}

console.log(minReamPaper);