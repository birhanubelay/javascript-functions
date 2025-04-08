//1 reversing elements and characters in the elements
 function sortedAndReversed(wordLists) {
    return wordLists
    .map(word => word.split('').sort((a, b) => b.localeCompare(a)).join(''))
    .sort();
}
const myList = ["apple", "spaghetti", "rice"];
console.log(sortedAndReversed(myList));
 
//2 checking whether the number is positive, negative, or zero
function checkNumber(nums) {
    return nums.map(num => {
        if (num > 0) {
            return `${num} is positive`;
        } else if (num < 0) {
            return `${num} is negative`;
        } else {
            return `${num} is zero`;
        }
    });
 }
 console.log(checkNumber([45, 56, -100, -200,0])
 );

 //3 sorting an array of employee by their salary
 function levelEmployees(employees) {
    return [...employees].sort((a, b) => a.salary - b.salary);
 }
 let employees = [
    { id: 25, name: "Rahel Tekulu", salary: 5000 },
    { id: 23, name: "Selam Birhane", salary: 4000 },
    { id: 43, name: "Chrubel Tekulu", salary: 5500 }
 ];
 const knowLevel = levelEmployees(employees);
 console.log(knowLevel);
 
 //4 multiplying each item in an array of numbers by 2
 
 function multiplyByTwo(nums) {
    nums.forEach(item => console.log(item * 2));
 }
 multiplyByTwo([150, 234, 567, 46, 47]);

 //5 multiplying items in an array of numbers by different numbers
 function differentMultiplication(nums) {
    let holderArray = [];
    for (let ourIndex = 0; ourIndex < 4 && ourIndex < nums.length; ourIndex++) {
        holderArray[ourIndex] = nums[ourIndex] * 8;
    }
    for (let ourIndex = 4; ourIndex < nums.length - 2; ourIndex++) {
        holderArray[ourIndex] = nums[ourIndex];
    }
    for (let ourIndex = nums.length - 2; ourIndex < nums.length && ourIndex >= 0; ourIndex++) {
        holderArray[ourIndex] = nums[ourIndex] + 5;
    }
    console.log(holderArray);
 }
 differentMultiplication([800, 2078, 678, 4900, 5099, 68, 54, 34, 67, 56]);
 
 