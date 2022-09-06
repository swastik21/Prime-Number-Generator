const PrimeNumberGenerator = require('../engine/prime_number_generator');
const { error } = require('console');

/* This function will take the range and the choice and 
will return the Prime Numbers from particular method based on choice. */

function userChoice(nums,choice){
    let result;
    const primeNumberGenerator = new PrimeNumberGenerator(nums);
    switch(choice){
        case "1":
            result = [primeNumberGenerator.sieveOfEratosthenes, primeNumberGenerator.timeTaken];
            break;
        case "2":
            result = [primeNumberGenerator.sieveOfSundaram, primeNumberGenerator.timeTaken];
            break;
        case "3":
            result = [primeNumberGenerator.sieveOfAtkin, primeNumberGenerator.timeTaken];
            break;
        default:
            throw error;
    }
    return result;
}

module.exports = userChoice;