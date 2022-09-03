/*istanbul ignore next */
const { error } = require('console');
const readline = require('readline');

/*istanbul ignore next */
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });


function primeNumberGenerator(nums){
    nums = nums.map((num)=> parseInt(num));
    nums[0] = nums[0] == 1 || nums[0] == 0 ? 2 : nums[0];
    let isPrime = Array(nums[1]).fill(true);
    let primeNumbers = [];
    let start = nums[0];
    let end = nums[1];
    for(let i = 2; i*i<= end; i++){
        if(isPrime){
            for(let j = i*i; j<=end; j = j+i){
                isPrime[j] = false;
            }
        }
    }
    for(let i = start;i<=end; i++){
        if(isPrime[i]){
            primeNumbers.push(i);
        }
    }
        return primeNumbers;
}

/* istanbul ignore next */
r1.question("enter the number range: \n", num => {
    try{
        let nums = num.split(' ');
        if (nums.length > 2 || nums[0] >= nums[1]) throw error;
        const result = primeNumberGenerator(nums);
        console.log(result);
        r1.close();
    } catch(e){
        error("ValueError: Please provide only valid values");
        r1.close();
    }
})

module.exports = primeNumberGenerator;