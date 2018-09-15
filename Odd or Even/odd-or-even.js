// Given an array of numbers (a list in groovy), determine whether the sum of all of the numbers is odd or even.

// Give your answer in string format as 'odd' or 'even'.

// If the input array is empty consider it as: [0] (array with a zero).

function oddOrEven(array1) {
  if (array1.length == 0) {
    return "even";
  }
  var checker = array1.reduce(function(a, b) {
    return a + b;
  });
  if (checker % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
