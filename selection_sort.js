function selectionSort(array) {
  var newArr = [];
  while (array.length !== 0) {
    var index = 0;
    var min = array[0];
    for (var i = 0; i < array.length; i++) {
      if (array[i] < min) {
        min = array[i];
        index = i;
      }
    }
    newArr.push(min);
    array.splice(index,1);
  }
  return newArr;
}

console.log(selectionSort([33,2,52,106,73]));
console.log(selectionSort([13,5,22,99,11]));
