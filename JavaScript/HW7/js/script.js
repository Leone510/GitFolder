
//----------------------------- Task 1 ---------------------------------

const searchCandidatesByPhoneNumber = phone => {
   return condidateArr.filter(condidate => condidate.phone.includes(phone))
}

//----------------------------- Task 2 ---------------------------------

const getCandidateById = id => {
   let fixedDateCondidate = condidateArr.find(condidate => condidate._id === id)
   
   let fixDate = fixedDateCondidate.registered.split("").splice(0, 10).join('').split('-').reverse().join('-')
   fixedDateCondidate.registered = fixDate;
   return fixedDateCondidate;
}

//----------------------------- Task 3 ---------------------------------

function balanceToNumber(balance) {
   return Number(balance.replace(/[^0-9\.-]+/g,""))
   // return balance.split('').filter(sumbol => sumbol === /\[0-9]/)
}

const sortCandidatesArr = sortBy => {
   if (sortBy === 'asc') {
      return condidateArr.sort((a, b) => balanceToNumber(a.balance) - balanceToNumber(b.balance));
   } else if(sortBy === 'desc') {
      return condidateArr.sort((a, b) => balanceToNumber(b.balance) - balanceToNumber(a.balance));
   } else if (sortBy === undefined) {
      return condidateArr.sort((a, b) => a.index - b.index);
   } else {
      return 'Wrong Sort Identificator'
   }
}

//----------------------------- Task 4 ---------------------------------

const getEyeColorMap = () => {
   let getColors = {};
   condidateArr.forEach(condidate => {
      if (!Object.keys(getColors).some(color => color === condidate.eyeColor)) {
         getColors[condidate.eyeColor] = [condidate]
      } else {
         getColors[condidate.eyeColor].push(condidate);
      }
   });

   return getColors;
}





