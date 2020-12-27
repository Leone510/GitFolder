
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








