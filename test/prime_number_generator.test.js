const PrimeNumberGenerator = require('../engine/prime_number_generator');

describe("Prime Number Generator Test 1", ()=> {
    const primeNumberGenerator = new PrimeNumberGenerator([1,10]);

    test("seiveOfEratosthenes() is called", ()=> {
        const seiveOfEratosthenesSpy = jest.spyOn(primeNumberGenerator,"sieveOfEratosthenes","get");
        const result = primeNumberGenerator.sieveOfEratosthenes;
        expect(result).toEqual([[2, 3, 5, 7], 4, "Seive of Eratosthenes"]);
        seiveOfEratosthenesSpy.mockClear();
    })
    test("seiveOfSundaram() is called", ()=> {
        const seiveOfEratosthenesSpy = jest.spyOn(primeNumberGenerator,"sieveOfSundaram","get");
        const result = primeNumberGenerator.sieveOfSundaram;
        expect(result).toEqual([[2, 3, 5, 7], 4, "Seive of Sundaram"]);
        seiveOfEratosthenesSpy.mockClear();
    })
    test("seiveOfAtkin() is called", ()=> {
        const seiveOfEratosthenesSpy = jest.spyOn(primeNumberGenerator,"sieveOfAtkin","get");
        const result = primeNumberGenerator.sieveOfAtkin;
        expect(result).toEqual([[2, 3, 5, 7], 4, "Seive of Atkin"]);
        seiveOfEratosthenesSpy.mockClear();
    })
})

describe("Prime Number Generator Test 2", ()=> {
    const primeNumberGenerator = new PrimeNumberGenerator([11,20]);

    test("seiveOfEratosthenes() is called", ()=> {
        const seiveOfEratosthenesSpy = jest.spyOn(primeNumberGenerator,"sieveOfEratosthenes","get");
        const result = primeNumberGenerator.sieveOfEratosthenes;
        expect(result).toEqual([[11, 13, 17, 19], 4, "Seive of Eratosthenes"]);
        seiveOfEratosthenesSpy.mockClear();
    })
    test("seiveOfSundaram() is called", ()=> {
        const seiveOfEratosthenesSpy = jest.spyOn(primeNumberGenerator,"sieveOfSundaram","get");
        const result = primeNumberGenerator.sieveOfSundaram;
        expect(result).toEqual([[11, 13, 17, 19], 4, "Seive of Sundaram"]);
        seiveOfEratosthenesSpy.mockClear();
    })
    test("seiveOfAtkin() is called", ()=> {
        const seiveOfEratosthenesSpy = jest.spyOn(primeNumberGenerator,"sieveOfAtkin","get");
        const result = primeNumberGenerator.sieveOfAtkin;
        expect(result).toEqual([[11, 13, 17, 19], 4, "Seive of Atkin"]);
        seiveOfEratosthenesSpy.mockClear();
    })
})

describe("Prime Number Generator Test 3", ()=> {
    const primeNumberGenerator = new PrimeNumberGenerator([1,100]);

    test("seiveOfEratosthenes() is called", ()=> {
        const seiveOfEratosthenesSpy = jest.spyOn(primeNumberGenerator,"sieveOfEratosthenes","get");
        const result = primeNumberGenerator.sieveOfEratosthenes;
        expect(result).toEqual([[2, 3, 5, 7, 11, 13, 17, 19,
                                23, 29, 31, 37, 41, 43, 47, 53,
                                59, 61, 67, 71, 73, 79, 83,
                                89, 97], 
                                25, 
                                "Seive of Eratosthenes"]);
        seiveOfEratosthenesSpy.mockClear();
    })
    test("seiveOfSundaram() is called", ()=> {
        const seiveOfEratosthenesSpy = jest.spyOn(primeNumberGenerator,"sieveOfSundaram","get");
        const result = primeNumberGenerator.sieveOfSundaram;
        expect(result).toEqual([[2, 3, 5, 7, 11, 13, 17, 19,
                                23, 29, 31, 37, 41, 43, 47, 53,
                                59, 61, 67, 71, 73, 79, 83,
                                89, 97], 
                                25, 
                                "Seive of Sundaram"]);
        seiveOfEratosthenesSpy.mockClear();
    })
    test("seiveOfAtkin() is called", ()=> {
        const seiveOfEratosthenesSpy = jest.spyOn(primeNumberGenerator,"sieveOfAtkin","get");
        const result = primeNumberGenerator.sieveOfAtkin;
        expect(result).toEqual([[2, 3, 5, 7, 11, 13, 17, 19,
                                23, 29, 31, 37, 41, 43, 47, 53,
                                59, 61, 67, 71, 73, 79, 83,
                                89, 97], 
                                25, 
                                "Seive of Atkin"]);
        seiveOfEratosthenesSpy.mockClear();
    })
})