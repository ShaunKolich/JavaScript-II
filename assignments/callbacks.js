// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/*

  //Given this problem:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation
  firstItem(items, function(first) {
    console.log(first)
  });

*/
function getLength(array, getLengthCb) {
  console.log(getLengthCb(array));
  // console.log(`The length of array is ${results}`);
  // getLength passes the length of the array into the callback.
}

let getLengthCb = (array) => {
  return array.length;
}
// console.log(results);

// getLength(items, getLengthCb);

let getLastCb = (lastItem) => {
  // array.length - 1;
  return lastItem;
}

function last(array, getLastCb) {
  // console.log(getLastCb(array[array.length - 1]));
  console.log(`Last Item Is ${getLastCb(array[array.length - 1])}`);
  // last passes the last item of the array into the callback.
}
last(items, getLastCb);


let addNumCB = function (x, y) {
  return x + y;

}

function sumNums(x, y, addNumCB) {
  console.log(addNumCB(x, y));

  // sumNums adds two numbers (x, y) and passes the result to the callback.
}

sumNums(1, 3, addNumCB);

let multNumCb = function (x, y) {
  return x * y;
}

function multiplyNums(x, y, multNumCb) {
  console.log(multNumCb(x, y));
  // multiplyNums multiplies two numbers and passes the result to the callback.
}

multiplyNums(1, 45, multNumCb);

let containsCB = function (items, list) {
  for (let i = 0; i < items.length; i++) {
    if (items[i] === list) {
      // console.log(`The item ${list} is in the array so the answer is True!`);
      return true;
    } else {
      // console.log(`The item ${list} isn't in the array so the answer is false`);
      return false;
    }
  }
}

function contains(items, list, containsCB) {
  console.log(containsCB(items, list));
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
}

contains(items, "Pizza", containsCB);

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}