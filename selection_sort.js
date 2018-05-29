function selectionSort(input){
    for(let i=0; i<input.length; i++){
        let temp = i
        for(let j=i+1; j<input.length; j++){
            if(input[j] < input[temp]){
                temp= j
            }
        }
        let currentNum = input[i]
        input[i]=input[temp]
        input[temp]=currentNum
    }
    return input
}

console.log(selectionSort([33,2,52,106,73]))
console.log(selectionSort([13,5,22,99,11]))