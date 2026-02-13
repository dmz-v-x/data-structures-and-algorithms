minAnd2ndMin(arr) {
        // code here
        let smallest = Infinity;
        let secondSmallest = Infinity;
        
        for(let i = 0; i<arr.length; i++){
            if(arr[i] < smallest){
                secondSmallest = smallest;
                smallest = arr[i];
            }else if(arr[i] < secondSmallest && arr[i] !== smallest){
                secondSmallest = arr[i];
            }
        }
        
        if(secondSmallest === smallest || secondSmallest === Infinity){
            return [-1];
        }
        
        return [smallest, secondSmallest];
}
