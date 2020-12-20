const sum = () => {
   let result = 0;
   let oldNum = 0;
 
   return (num) => {
      oldNum = result;
      result = oldNum + num;
      return result;
   };
}

let counter = sum()





