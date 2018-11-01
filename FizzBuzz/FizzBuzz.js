function fizzBuzz() {
  var arr1 = [];
  for (i = 0; i < 100; i++) {
    if (i % 15 === 0) {
      arr1.push("fizzBuzz");
    } else if (i % 5 === 0) {
      arr1.push("buzz");
    } else if (i % 3 === 0) {
      arr1.push("fizz");
    } else {
      arr1.push(i);
    }
  }
  return arr1;
}
