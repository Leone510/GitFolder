class CustumString {
   constructor (str) {
      this.string = str;
   }

   get reverse() {
      return this.string.split('').reverse().join('');
   }

   get ucFirst() {
      return this.string[0].toUpperCase() + this.string.slice(1);
   }

   get ucWord() {
      return this.string.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ');
   }
}

const myString = new CustumString('qwerty qwerty qwerty');

console.log(myString);