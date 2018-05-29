




function selectSort(array) {

    var tampung;

    for (var i = 0; i < array.length; i++) {
        var index = i

        for (var j = i + 1; j < array.length; j++) {
            if (array[j] < array[index])
                index = j
        }

        tampung = array[i]
        array[i] = array[index]
        array[index] = tampung
    }

    return array

}


console.log(selectSort([33, 2, 52, 106, 73]))
// console.log(selectSort([2, 33, 52, 72, 106]))
console.log(selectSort([13, 5, 22, 99, 11]))
// console.log(selectSort([5, 11, 13, 22, 99]))