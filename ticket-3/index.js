function countNumberOfNinesInNumber(number) {
  let count = 0;
let numArray = Array.from(number.toString())
  for (let i = 0; i < number.toString().length; i++) {
    let digit = numArray[i];
    if (9 == digit) {
      count++;
    }
  }

  return count;
}
console.log(countNumberOfNinesInNumber(99.999))
console.log(countNumberOfNinesInNumber(9))
console.log(countNumberOfNinesInNumber(989))
console.log(countNumberOfNinesInNumber(1115.1257846))