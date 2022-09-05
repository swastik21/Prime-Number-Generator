class PrimeNumberGenerator{

    constructor(range){
        this.nums = range;
        this.timeTaken;
    }

    get sieveOfEratosthenes(){
        this.nums = this.nums.map((num)=> parseInt(num));
        this.nums[0] = this.nums[0] == 1 || this.nums[0] == 0 ? 2 : this.nums[0];
        let isPrime = Array(this.nums[1]).fill(true);
        let primeNumbers = [];
        let start = this.nums[0];
        let end = this.nums[1];
        let startTime = performance.now();
        let endTime,timeDiff;

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

        endTime = performance.now();
        timeDiff = endTime - startTime;
        this.timeTaken = timeDiff.toFixed(5);
    
            return [primeNumbers,primeNumbers.length,"Seive of Eratosthenes"];
    }

    get sieveOfSundaram(){
        this.nums = this.nums.map((num)=> parseInt(num));
        this.nums[0] = this.nums[0] == 1 || this.nums[0] == 0 ? 2 : this.nums[0];
        let k = Math.round(this.nums[1] - 1 / 2);
        let isPrime = Array(k+1).fill(true);
        let tempPrimeNumbers = [2];
        let primeNumbers = [];
        let start = this.nums[0];
        let end = this.nums[1];
        let startTime = performance.now();
        let endTime,timeDiff;

        for(let  i = 1; i*i <= k; i++){
            for(let j = i; (i+j+(2*i*j)) <= k; j++){
                isPrime[i+j+(2*i*j)] = false;
            }
        }

        for(let i = 1; i< end; i++){
            if(isPrime[i] == true){
                tempPrimeNumbers.push(2*i+1);
            }
        }

        for(let num of tempPrimeNumbers){
            if(num >= start && num <= end){
                primeNumbers.push(num);
            }
        }

        endTime = performance.now();
        timeDiff = endTime - startTime;
        this.timeTaken = timeDiff.toFixed(5);

        return [primeNumbers,primeNumbers.length,"Seive of Sundaram"];
    }

    get sieveOfAtkin(){
        let primeNumbers = [];
        let isPrime = Array(this.nums[1]).fill(false);
        isPrime[2] = true;
        isPrime[3] = true;
        let start = this.nums[0];
        let end = this.nums[1];
        let startTime = performance.now();
        let endTime,timeDiff;

        for (let i = 1; i*i <= end; i++){
            for (let j = 1; j*j <= end; j++){
                let n = (4*i*i) + (j*j);
                if(n <=end && (n%12 == 1 || n%12 == 5)){
                    isPrime[n] ^= true;
                }
                n = (3*i*i) + (j*j);
                if(n <= end && n%12 == 7){
                    isPrime[n] ^= true;
                }
                n = (3*i*i) - (j*j);
                if( i > j && n <= end && n%12 == 11){
                    isPrime[n] ^= true;
                }
            }
        }
        for (let i = 5; i*i <= end; i++){
            if(isPrime[i]){
                for(let j = i*i; j<=end; j+= i*i){
                    isPrime[j] = false;
                }
            }
        }

        for(let i = start; i<= end; i++){
            if(isPrime[i]){
                primeNumbers.push(i);
            }
        }
        endTime = performance.now();
        timeDiff = endTime - startTime;
        this.timeTaken = timeDiff.toFixed(5);

        return [primeNumbers,primeNumbers.length,"Seive of Atkin"];
    }
}

module.exports = PrimeNumberGenerator;