function selectionSort(numbers){

    for(let a = 0; a < numbers.length; a++ ){
        let temp = a;

        for(let b = a; b < numbers.length;b++){
            if(numbers[temp] > numbers[b]){
                temp = b;
            }
        }
        if(temp !== a){
            let tempNum = numbers[a]
                numbers[a]= numbers[temp];
                numbers[temp] = tempNum; 
        }
    }
    return numbers;
}


console.log(selectionSort([40, 18, 22, 32, 90, 10, 10, 22, 8]))
console.log(selectionSort([13,5,22,99,11]))