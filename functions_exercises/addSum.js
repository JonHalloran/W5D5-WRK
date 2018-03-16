var readline = require('readline');

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft === 0){
    completionCallback(sum);
    reader.close();
    return sum;
  }
  
  let newSum = sum;

  reader.question("Please enter a number: ", function(answer)  {
    newSum += Number(answer);
    numsLeft--;
    addNumbers(newSum, numsLeft, completionCallback);
  });
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
