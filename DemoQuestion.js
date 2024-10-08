// Write a function:

// function solution(A);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].

function solution(A) {
    // Create a set to store the unique positive integers from the array
    const set = new Set();
    
    // Add only positive integers from the array into the set
    for (const num of A) {
        if (num > 0) {
            set.add(num);
        }
    }
    
    // Start from 1 and look for the smallest missing positive integer
    let smallestMissing = 1;
    
    // Keep checking if the current number is in the set
    while (set.has(smallestMissing)) {
        smallestMissing++;
    }
    
    // Return the first number that is not in the set
    return smallestMissing;
}