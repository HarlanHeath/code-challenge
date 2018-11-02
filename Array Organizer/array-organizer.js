var theArray = [[Nan, "0", 0, 4, 20], [1, 5, 3, "88", 53, "51"]];

function theSorter(arr1) {
  theNewArray = [];
  for (i = 0; i < arr1.length; i++) {
    for (j = 0; j < arr1[i].length; j++) {
      if (typeof arr1[i][j] === "number") {
        theNewArray.push(arr1[i][j]);
      } else if (typeof arr1[i][j] === "string") {
        theNewArray.push(arr1[i][j]);
      }
    }
  }
  return theNewArray.sort(function(a, b) {
    return a - b;
  });
}
