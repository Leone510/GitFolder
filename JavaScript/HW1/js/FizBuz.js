let result;
for (let i=1; i<=10; i++){
   if (i%2===1||i===1){
      result='Buz'
   } else {
      result='Fiz'
   }
   if (i%3===0) {
      result='FizBuz'
   }
   console.log(result);
}