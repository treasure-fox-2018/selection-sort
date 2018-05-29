let selectionSort = (input) => {
  for (let i = 0 ; i < input.length-1 ; i++) {
    let min = input[i]
    let indexMin = i;
    for (let j = i+1 ; j < input.length ; j++) {
      if (input[j] < min) {
        min = input[j];
        indexMin = j;
      }
    }
    //swap current index value with index indexMin
    let temp = input[indexMin];
    input[indexMin]= input[i];
    input[i] = temp;
  }
  return input;
}


console.log(selectionSort([5,4,3,2,1]))
console.log(selectionSort([33,2,52,106,73]))
