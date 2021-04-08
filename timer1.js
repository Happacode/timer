// process.stdout.write('\x07');

// 1. No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
// 2. An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
// 3. An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.
// const args = process.argv;
// console.log(args);
const numTimer = process.argv.slice(2);
numTimer.sort(function(a, b) {
  return a - b;
});
console.log(numTimer);
for (const digit of numTimer) {
  if (digit > 0 && isNaN(digit) === false) {
    setTimeout(() => {
      // print the char here
      process.stdout.write('\x07');
    }, digit * 1000) // <= 1s delay to make it noticeable. Can dial it down later.
  } 
};
// setTimeout(() => {
//     process.stdout.write("\n");
// }, timer)