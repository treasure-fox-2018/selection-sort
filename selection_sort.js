function selectionSort(data) {
    for (let i = 0; i < data.length; i++) {
        var min = data[i]
        index = i
        for (let j = i; j < data.length; j++) {
            if (min > data[j]) {
                min = data[j]
                index = j
            }
        }
        temp = data[i]
        data[i] = data[index]
        data[index] = temp
        
    }
    return data
}


console.log(selectionSort([33,2,52,106,73]));
console.log(selectionSort([13,5,22,99,11]));

