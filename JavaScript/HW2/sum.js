const arr = [12, 898, 899, 900];

let first = arr[0],
    second = 0;

for (let i=0; i<arr.length; i++) {
   if (arr[i] > 0 && (arr[i] - parseInt(arr[i]) === 0)) {
      if (first >= arr[i]) {
         second = first;
         first = arr[++i];
      }
   }
}

let result = first + second;
console.log(result);