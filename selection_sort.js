
// INSERTION SORT

// function sortManual(array) {

//     var temp = 0

//     for (let i = 0; i < array.length; i++) {
//         for (let j = i+1; j < array.length; j++) {
//             // case 1 -> apakah 33 > 2? kalo iya jalanin yg bwh
//             if (array[i] > array[j]) {
//                 // sekarang si temp nya isi si 33
//                 temp = array[i]
//                 // yg bawah utk nge swap jadi 2, 33
//                 array[i] = array[j]
//                 // j nya jadi 33
//                 array[j] = temp
//             }
//         }
//     }
//     return array
// }


// console.log(sortManual([33, 2, 52, 106, 73])); //[2, 33, 52, 73, 106]
// console.log(sortManual([13, 5, 22, 99, 11])); //[5, 11, 13, 22, 99]


// SELECTION SORT

function selectionSort(arr) {
   
    var emptyArr = []
    
    while(arr.length !== 0) {
        var min = arr[0];
        var tmp = 0
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i]
                tmp = i
            }
        }
        emptyArr.push(min)
        arr.splice(tmp, 1)
    }
    return emptyArr
}
console.log(selectionSort([33, 2, 52, 106, 73])); //[2, 33, 52, 73, 106]
console.log(selectionSort([13, 5, 22, 99, 11])); //[5, 11, 13, 22, 99]