function getArray(){
   const arr = [];
   const amount = 12;
   
   for (let i=1; i<=amount;){
      for (let j=0; j<3; j++){
         arr[j] = i; 
         i++;
      }
      console.log (arr);
   }
}

getArray()