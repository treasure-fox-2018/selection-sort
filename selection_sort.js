function selectionSort(num) {
  var containNewNum = []
  while (num.length - 1 >= 0) {
    var min = 0 
    debugger;
    for (var a = 0; a < num.length; a++) {
      debugger;
      if (num[min] > num[a]) {
        min = a
        debugger;
      }
    }
    containNewNum.push(num[min])
    debugger;
    num.splice(min, 1)
    debugger;
  }
  return containNewNum
}

console.log(selectionSort([33, 2, 52, 106, 73]));
console.log(selectionSort([13, 5, 22, 99, 11]))