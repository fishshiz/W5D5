const readline = require ('readline');

const reader = readline.createInterface( {
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft === 0) {
    completionCallback(sum);
    reader.close();
  } else if (numsLeft > 0) {
    numsLeft--;
    reader.question("What is your number?", function(numString1){
      let x = parseInt(numString1);
      sum += x;
      addNumbers(sum, numsLeft, completionCallback);
    });
  }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
