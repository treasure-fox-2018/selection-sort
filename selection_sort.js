function selectionSort(input) {
  for (var a = 0; a < input.length; a++) {
    var target = input[a]
    for (var b = a - 1; b >= 0 & (input[b] > target); b--) {
      input[b+1] = input[b]
    }
    input[b+1] = target
  }
  return input
}
console.log(selectionSort([33, 2, 52, 106, 73]))//[ 2, 33, 52, 73, 106 ]
console.log(selectionSort([13, 5, 22, 99, 11]))//[ 5, 11, 13, 22, 99 ]