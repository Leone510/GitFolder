const timeDifference = () => {
   let secDifference = 0;
   return () => {
      setInterval(() => {
         secDifference++;
      }, 1000);
      if (secDifference === 0) {
         return console.log('Enabled');
      }
      return secDifference;
   }
}

let getTime = timeDifference();

