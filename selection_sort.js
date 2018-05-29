function sortManual(array) {

    var temp = 0

    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            // case 1 -> apakah 33 > 2? kalo iya jalanin yg bwh
            if (array[i] > array[j]) {
                // sekarang si temp nya isi si 33
                temp = array[i]
                // yg bawah utk nge swap jadi 2, 33
                array[i] = array[j]
                // j nya jadi 33
                array[j] = temp
            }
        }
    }
    return array
}


console.log(sortManual([33, 2, 52, 106, 73])); //[2, 33, 52, 73, 106]
console.log(sortManual([13, 5, 22, 99, 11])); //[5, 11, 13, 22, 99]