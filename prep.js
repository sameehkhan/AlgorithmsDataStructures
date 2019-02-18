function twoNumberSum(array, targetSum) {
    // Write your code here.
    // 	iterate over array, if target sum - curr num
    let sums = new Set;
    let twos = [];
    let tar = 0;

    for (let i = 0; i < array.length; i++) {
        tar = targetSum - array[i];
        if (sums.has(tar)) {
            tar > array[i] ? twos.push(array[i], tar) : twos.push(tar, array[i]);
        }
        sums.add(array[i]);
    }
    return twos;
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;



function recSum(nums) {
    if (nums.length < 1) return 0;

    return nums[0] + recSum(nums.slice(1))
}

// Implement a method that finds the sum of the first n
// fibonacci numbers recursively. Assume n > 0

function fibsSum(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;

    return fibsSum(n - 1) + fibsSum(n - 2) + 1;
}

function primeFactorization(num) {
    if (num === 2) return [2];

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            let factors = [i].concat(primeFactorization(num / i))
            return factors;
        }
    }
    return [num]; 
}

Array.prototype.quickSort = function (comparator) {
    if (this.length < 2) return this;

    if (!comparator) {
        comparator = (x, y) => {
            if (x < y) return -1;
            return 1;
        }
    }
    const pivot = this[0];
    let left = this.slice(1).filter((el) => comparator(el, pivot) === -1)
    let right = this.slice(1).filter((el) => comparator(el, pivot) != -1)
    left = left.quickSort(comparator)
    right = right.quickSort(comparator);
    return left.concat([pivot]).concat(right);
};