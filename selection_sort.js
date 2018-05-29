let selectionSort = (value) => {
  var arr = [];
    while (value.length > 0) {
      var min = value[0]
      var tmp = 0
      for (var i = 0; i < value.length; i++) {
        if(min > value[i]){
          min = value[i]
          tmp = [i]
        }
      }
      arr.push(min)
      value.splice(tmp,1)
    }
    return arr;
}

console.log(selectionSort([33, 2, 52, 106, 73]))
console.log(selectionSort([13, 5, 22, 99, 11]))
console.log(selectionSort([2, 33, 52, 73, 106]))
console.log(selectionSort([5, 11, 13, 22, 99]))
