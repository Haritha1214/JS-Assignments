//built-in method
function vowelCount(str) { 
    const count = str.match(/[aeiou]/gi).length;
    return count;
}
const string = prompt('Enter a string: ');
const result = vowelCount(string);
console.log(result);

//using loops
const vowels = ["a", "e", "i", "o", "u"]
function vowelCount(str) {
    let count = 0;
    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }
    return count
}
const string = prompt('Enter a string: ');
const result = vowelCount(string);
console.log(result);
