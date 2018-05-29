function selectionSort(array) {

    var temp = 0

    for(var i = 0 ; i < array.length; i++){

        var ubah = i;

        for(var j = i + 1; j<array.length; j++) {
            if(array[j] < array[ubah])
                ubah = j;
        }
        //proses swap mencari terkecil
        temp = array[i];
        array[i] = array[ubah];
        array[ubah] = temp;
    }
    return array
};
console.log(selectionSort([33,2,52,106,73]))
console.log(selectionSort([13,5,22,89,99]))
