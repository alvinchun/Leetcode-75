var findDifference = function(nums1, nums2) {
    let ans1=new Set(nums1)
    nums2.forEach(v=>{ans1.delete(v)});
    let ans2=new Set(nums2);
    nums1.forEach(v=>{ans2.delete(v)});    

    return [[...ans1],[...ans2]];
};

var findDifference = function(nums1, nums2) {
    let s1 = new Set(nums1);
    let s2 = new Set(nums2);
    let ans = [[], []];

    for (let i of s1) {
        if (!s2.has(i)) {
            ans[0].push(i);
        }
    }

    for (let i of s2) {
        if (!s1.has(i)) {
            ans[1].push(i);
        }
    }

    return ans;
};

var findDifference = function(nums1, nums2) {
    
    nums1 = new Set(nums1)
    nums2 = new Set(nums2)

    for (let item of nums1){
        if (nums2.has(item)) {
            nums1.delete(item)
            nums2.delete(item)
        }
    }
    return [Array.from(nums1),Array.from(nums2)]
   
};