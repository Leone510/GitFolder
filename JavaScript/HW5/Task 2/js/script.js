const foo = () => {
   let arr = [];
   return (a) => {
      if (a === undefined) {
         arr = [];
         return arr;
      }
      arr.push(a);
      return arr;
   };
}

let getUpdatedArr = foo()