var findMaxAverage = function(nums, k) {
    let sum = 0;
    for (let i = 0; i < k; i++) {
      sum += nums[i];
    }
    
    let max = sum;
    for (let i = k; i < nums.length; i++) {
      sum = sum - nums[i - k] + nums[i];
      max = Math.max(max, sum);
    }
    
    return max / k;
  };

  function findMaxAverage(nums: number[], k: number, sum = 0, max = 0): number {
    for ( let i = 0; i < k; i++ ) {
      sum += nums[i]
    }
    max = sum / k
    for ( let i = k; i < nums.length; i++ ) {
      sum += nums[i] - nums[i - k]
      max = Math.max(max, sum / k)
    }
    return max
  };

  
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let avr = -Infinity;
    let windowSum = 0;
    let windowStart = 0;
    
    for(let windowEnd = 0; windowEnd < nums.length; windowEnd++){
         windowSum += nums[windowEnd];
        
        if((windowEnd - windowStart) + 1 === k){
             avr = Math.max(avr, windowSum/k);
            windowSum -= nums[windowStart];
            windowStart += 1;
        }       
    }
    
    return avr;
};

var findMaxAverage = function(nums, k) {
  let sum = nums.slice(0, k).reduce((a, b) => a + b, 0);
  let max = sum;

  for (let i = k; i < nums.length; i++) {
      sum += nums[i] - nums[i - k];
      max = Math.max(max, sum);
  }

  return max / k;
};
