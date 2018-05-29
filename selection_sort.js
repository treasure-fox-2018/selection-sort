function selectionSort (arr) {
    var min = 0;

    for (var i = 0; i < arr.length; i++) {
        for (var j = i+1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                min = arr[i];
                arr[i] = arr[j];
                arr[j] = min;
            }
        }
    }
    return arr;
}

console.log(selectionSort([33, 2, 52, 106, 73])); //[2, 33, 52, 73, 106]
console.log(selectionSort([13, 5, 22, 99, 11])); //[5, 11, 13, 22, 99]