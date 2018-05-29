/**
 * @function selectionSort
 * fungsi melakukan pengurutan menggunakan metode selection sort
 * @param {array} numbers input berupa kumpulan angka acak dalam sebuah array
 * @returns {array} fungsi akan mengeluarkan output array yang sudah terurut
 */

let numbers = [4 ,6, 2, 8, 11, 34, 1, 7, 21, 79];

function selectionSort(nums) {
    let lowest = 0;
    let lowestIndex = 0;
    let n = nums.length;

    for (let i = 0; i < nums.length; i++) {
        lowest = nums[i];
        lowestIndex = i;

        for (let j = i; j < nums.length; j++) {
            if (nums[j] < lowest) {
                lowest = nums[j];
                lowestIndex = j;
            }
        }

        let temp = nums[i];
        nums[i] = nums[lowestIndex];
        nums[lowestIndex] = temp;
    }
    return nums;
}

console.log(selectionSort(numbers));
