function selection_sort(number) {
  var sort = [];
  while (number.length>0) {
    var min = number[0]
    var idxMin = 0
    for (var i = 0; i < number.length; i++) {
      if(min>number[i]){
        min = number[i]
        idxMin = [i]
      }
    }
    sort.push(min)
    number.splice(idxMin,1)
  }
  return sort;
}

console.log(selection_sort([8,5,7,1,9,3]));

console.log(selection_sort([33,2,52,106,73]));

console.log(selection_sort([5,11,13,22,99]));
