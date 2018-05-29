function selectionSort(arr){
  var arr2 = [];

  while (arr.length > 0) {
    var index = 0;
    var check = arr[0];
    for (var i = 0; i < arr.length; i++) {
      if (check > arr[i]) {
        check = arr[i];
        index = i;
      }
    }
    arr2.push(check);
    arr.splice(index, 1);
  }




  return arr2;
}

console.log(selectionSort([33, 2, 52, 106, 73]));
console.log(selectionSort([13, 5, 22, 99, 11]));
