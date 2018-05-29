function selectionSort(arr) {
  var arrSort = []
  while (arr.length > 1) {
    var min = arr[0]
    for (var a = 0; a < arr.length; a++) {
      if (arr[a] < min) {
        min = arr[a]
      }
    }
    arrSort.push(min)
    arr.splice(arr.indexOf(min), 1)
  }
  arrSort.push(arr[0])
  return arrSort
}

console.log(selectionSort([10, 9, 2, 67, 3, 8, 15, 82, 7, 1]))