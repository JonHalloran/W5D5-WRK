var readline = require('readline');

var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} bigger than ${el2}? (Y/N)`, function (answer){
    if (answer === 'Y') {
      callback(true);
    } else {
      callback(false);
    }
  });
}

// askIfGreaterThan(2, 4, (el) => {
//   console.log(el);
//   }
// );
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i < arr.length - 1){
    askIfGreaterThan(arr[i], arr[i + 1], (arg) => {
      if (arg){
        [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]];
        madeAnySwaps = true;
      }
      i++;
      console.log(arr);
      innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop);
    });
  } else {
    outerBubbleSortLoop(madeAnySwaps);
  }

}

// innerBubbleSortLoop([4, 7, 3, 1], 0, false, (arr) => {
//   console.log(arr);
// });



function absurdBubbleSort(arr, sortCompletetionCallback){
  outerBubbleSortLoop(true);
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletetionCallback(arr);
    }
  }
}

absurdBubbleSort([3, 2, 1, 4], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
