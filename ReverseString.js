function reverseString(s) {
    const arrayStr = s.split("");
    const reverseArr = arrayStr.reverse();
    const joinArr = reverseArr.join("");
    return joinArr;
}
const string = prompt('Enter a string: ');
const result = reverseString(string);
console.log(result);
