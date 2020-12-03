const binarArr = [1, 1, 1, 0, 0, 1];
let binarNum ='';

for (let num of binarArr) {
   binarNum += num;
}

console.log(parseInt(binarNum, 2));