//upto n terms
const num = parseInt(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1, nextTerm;
console.log('Fibonacci Series:');
for (let i = 1; i <= num; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}

//upto certain num
const num = parseInt(prompt('Enter a positive number: '));
let n1 = 0, n2 = 1, nextTerm;
console.log('Fibonacci Series:');
console.log(n1); 
console.log(n2); 
nextTerm = n1 + n2;
while (nextTerm <= num) {
    console.log(nextTerm);
    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
}
