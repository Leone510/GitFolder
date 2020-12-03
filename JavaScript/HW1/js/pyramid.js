const medianNumber = 7;
const medianLength = medianNumber*2-1;

let pyramidBlocks = 1;
let aroundSide = ((medianLength)-1)/2;

for (let i=1; i<=medianNumber; i++){
   let dashes = '';
   let pyramidBody = '';

   for (let j=1; j<=aroundSide; j++){
      dashes += '-'
   }

   for (let j=1; j<=pyramidBlocks; j++){
      pyramidBody += '#'
   }

   console.log(dashes+pyramidBody+dashes);
   
   aroundSide--;
   pyramidBlocks +=2;
}