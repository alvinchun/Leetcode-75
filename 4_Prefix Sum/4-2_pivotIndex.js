function Accumulation(arr){
    return arr.reduce((a,b)=>a+b);  
}

var pivotIndex = function(nums) {
    

    // Initialization:
    // Left hand side be empty, and
    // Right hand side holds all weights.
    
    let totalWeightOnLeft = 0;
    let totalWeightOnRight = Accumulation(nums);
    
    for( let i = 0 ; i < nums.length ; i++ ){
        
        let currentWeight = nums[i];
        
        totalWeightOnRight -= currentWeight;
        
        if( totalWeightOnLeft == totalWeightOnRight ){
            // balance is met on both sides
            return i;
        }
        
        totalWeightOnLeft += currentWeight
        
        
    }
    
    return -1;
    
};

var pivotIndex = function(nums) {
    let total = nums.reduce((a, b) => a + b, 0);
    let leftTotal = 0;

    for (let i = 0; i < nums.length; i++) {
        let rightTotal = total - leftTotal - nums[i];

        if (rightTotal === leftTotal) {
            return i;
        }

        leftTotal += nums[i];
    }

    return -1;    
};

const pivotIndex = (nums) => {
	// We have not started our program yet, so values are at 0
    let rightSum = 0;
    let leftSum = 0;

	// Calculate the sum of the entire array
    // O(n)
    nums.forEach((v) => (rightSum += v));

    // O(n)
    for (var i = 0; i <= nums.length - 1; i++) {
        let curr = nums[i];
		
		// The right sum no longer contains the curr number
        rightSum -= curr;
		
		// if left sum equals right sum, we return index
        if (leftSum === rightSum) return i;
		
		// We did not find a match
		// Left sum now contains our curr number
        leftSum += curr;
    }

    return -1;
};