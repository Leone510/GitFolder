const sum = (num) => {
   let result = 0;
   let oldNum = 0;
   console.log(result);
   console.log(oldNum);
   return () => {
      oldNum = result;
      result = oldNum + num;
      console.log(oldNum);
      console.log(result);
   };
}

let foo = sum(2)





