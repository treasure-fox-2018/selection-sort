function selecSort(input){
    
    for(let i=0;i<input.length ;i++){
        let small = i
        for(let j=i;j<input.length;j++){
            if(input[j] < input[small]){
                small = j
            }
        }
        if(small !== i){
            let tampung = input[i]
            input[i] = input[small]
            input[small] =  tampung
        }
    }


return input

}
console.log(selecSort([33,2,52,106,73]))   
console.log(selecSort([33,2,52,106,73,1,29]))   

