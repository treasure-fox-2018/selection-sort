function selectionSort(arr) {
  var hasil = [];
  for (var i = 0; i <= arr.length - 2; i++) {
    for (var j = i+1; j <= arr.length - 1; j++) {
      if (arr[i] > arr [j]) { //membandingkan nilai awal dengan nilai setelahnya
        var nilaiMinimumSementara = arr[i]; //kita anggap nilai terkecil merupakan nilai awal tersebut
        arr[i] = arr[j]; //jika sudah ditemukan nilai terkecil dari satu looping, kita ambil nilai terkecilnya.
        arr[j] = nilaiMinimumSementara; // lalu setelah nilai terkecil kita ambil, nilai tersebut kita ganti dengan nilai awal itu.
      }
    }
  }
  return arr;

}

console.log(selectionSort([33, 2, 52, 106, 73]))
console.log(selectionSort([13, 5, 22, 99, 11]))
