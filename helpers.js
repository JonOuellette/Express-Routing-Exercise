function parseNumbers(numsQuery) {
    const nums = numsQuery.split(',').map(Number);
  
    for (const num of nums) {
      if (isNaN(num)) {
        throw new ExpressError(`${num} is not a number`, 400);
      }
    }
  
    return nums;
  }

// calculate means
function calcMeans(nums){
    if (nums.length === 0) return 0;
    return nums.reduce((acc, cur) => acc + curr, 0)/nums.length;
};

//calculate median
function calcMedian(nums){
    nums.sort((a,b) => a - b);
    let middleIndex = Math.floor(nums.length/2);

    if (nums.length % 2 === 0){
        return (nums[middleIndex - 1] = nums[middleIndex])/2;
    }
    else{
        return nums[med];
    }
}

//determine mode...most frequent number
function calcMode(nums){
    let numCount = {};
    let maxfreq = 0;
    let modeNum = [];

    for (let i = 0; i < nums.length; i++) {
        const number = nums[i];
        numCount[number] = (numCount[number] || 0) + 1;
        if (numCount[number] > maxfreq) {
          maxfreq = numCount[number];
          modeNum = [number];
        } else if (numCount[number] === maxfreq) {
          modeNum.push(number);
        }
      }
    
      if (modeNum.length === nums.length) {
        return null;
      }
    
      return modeNum;
}
