function selection_sort (arr){
  var arrNew = []

  while (arr.length > 0){  
    var min = arr[0]
    var index = 0
    for (var j = 1; j < arr.length; j++){
      if (arr[j] < min){
        min = arr[j]
        index = j
      }
    }
    arrNew.push(min)
    arr.splice(index, 1)
    debugger;
  }
  return arrNew
}

console.log(selection_sort([3, 31, 89, 53, 53, 85, 77, 21, 55]))