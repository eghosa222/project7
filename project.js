

//string function//
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Example 
document.write(reverseString("hello")); // Output: "olleh"

function countCharacters(str) {
    return str.length;
}

// Example 
document.write(countCharacters("hello")); // Output: 5


function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Example 
document.write(capitalizeWords("hello world")); // Output: "Hello World"


//max and min function

function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}

// Example 
document.write(findMax([1, 2, 3, 4, 5])); // Output: 5
document.write(findMin([1, 2, 3, 4, 5])); // Output: 1

function sumArray(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

// Example 
document.write(sumArray([1, 2, 3, 4, 5])); // Output: 15

function filterArray(arr, condition) {
    return arr.filter(condition);
}

// Example 
document.write(filterArray([1, 2, 3, 4, 5], (num) => num % 2 === 0)); // Output: [2, 4]

//factorial function

function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

// Example 
document.write(factorial(5)); // Output: 120


function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
        i += 6;
    }
    return true;
}

// Example 
document.write(isPrime(11)); // Output: true


function fibonacci(num) {
    let fib = [0, 1];
    for (let i = 2; i < num; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, num);
}

// Example 
document.write(fibonacci(5)); // Output: [0, 1, 1, 2, 3]







