const primeNumberGenerator = require('./prime_number_generator');
test("Returns list of prime number for given range", ()=> {
     expect(primeNumberGenerator([11,20])).toStrictEqual([ 11, 13, 17, 19 ]);
})

test("Returns list of prime number for given range", ()=> {
    expect(primeNumberGenerator([1,10])).toStrictEqual([ 2, 3, 5, 7 ]);
})

test("Returns list of prime number for given range", ()=> {
    expect(primeNumberGenerator([2354,3000])).toStrictEqual([
        2357, 2371, 2377, 2381, 2383, 2389, 2393, 2399,
        2411, 2417, 2423, 2437, 2441, 2447, 2459, 2467,
        2473, 2477, 2503, 2521, 2531, 2539, 2543, 2549,
        2551, 2557, 2579, 2591, 2593, 2609, 2617, 2621,
        2633, 2647, 2657, 2659, 2663, 2671, 2677, 2683,
        2687, 2689, 2693, 2699, 2707, 2711, 2713, 2719,
        2729, 2731, 2741, 2749, 2753, 2767, 2777, 2789,
        2791, 2797, 2801, 2803, 2819, 2833, 2837, 2843,
        2851, 2857, 2861, 2879, 2887, 2897, 2903, 2909,
        2917, 2927, 2939, 2953, 2957, 2963, 2969, 2971,
        2999
      ]);
})

  