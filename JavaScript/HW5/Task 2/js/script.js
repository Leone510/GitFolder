const getUpdatedArr = (a) => {
   let arr = [];
   return () => {
      arr.push(a);
      console.log(arr);
   };
}