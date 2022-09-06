const { error } = require('console');
const readline = require('readline');
const userChoice = require('./utils/user_choice');

//Creating interface for taking inputs from the terminal.
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

/* Taking inputs from the user and passing it to 
the functions and displaying the results in the terminal. */
r1.question("enter the number range: \n", num => {
    r1.question("Select the Algorithm: \n1. Sieve of Eratosthese \n2. Sieve of Sundaram \n3. Sieve of Atkin\n", choice => {
        try{
            let nums = num.split(' ');
            if (nums.length > 2 || nums.length <= 1|| nums[0] >= nums[1]) throw error;

            const result = userChoice(nums,choice);

            console.log(`Prime Numbers: ${result[0][0].toString()} \nTime Taken: ${result[1]}ms \nNumber of Primes: ${result[0][1]} \nAlgorithm: ${result[0][2]}`);

            r1.close();
        } catch(e){
            error("ValueError: Please provide only valid values");
            r1.close();
        }
    })
})
