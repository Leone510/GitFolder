const time = () => {
   // ?????????????
   return (sec) => {
      let fixMin;
      let fixSec;
      let min = parseInt(sec/60);
      let timer = setInterval(() => {
         //----- Minutes -----
         if ((sec+1)%60 === 0) {
            min--;
         }
         if (min < 10) {
            fixMin = '0' + min;
         } else {
            fixMin = min
         }
         //----- Minutes -----
         //----- Seconds -----
         if ((sec%60) < 10) {
            fixSec = '0' + (sec%60);
         } else {
            fixSec = (sec%60);
         }
         //----- Seconds -----
         if (sec === 0) {
            clearInterval(timer);
            return console.log('Time End');
         }
         console.log(fixMin + ':' + fixSec);
         sec--;
      }, 1000)
   }
}


const timer = time();