const selectionSort = (array =>{
    for(let z = 1; z < array.length; z ++){
        for(let k = 0; k < z; k++){
            let temp = array[z];
            if(array[z] < array[k]){
                array.splice(z,1);
                array.splice(k,0,temp);
                break;
            }
        }
    }
    return array
})

console.log(selectionSort([123,4124,5345,634,1236,321,423,432,5654]))