function selectionSort(arr){

var arrbaru = []
    while(arr.length !== 0){
        var min = 0
        for(var i = 0; i < arr.length; i++){
            if(arr[i] < arr[min]){
                min = i         
            }
        } 
        arrbaru.push(arr[min])
        arr.splice(min,1)
        min = 0
    }
return arrbaru
}
    
    console.log(selectionSort([ 33, 2, 52, 106, 73]));
    console.log(selectionSort([ 13, 5, 22, 73, 106]));