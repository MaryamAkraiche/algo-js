let originalArray = [1, 2, 3, 4, 5];
var duplicateArray = originalArray;
console.log(duplicateArray);

//the first version:
duplicateArray = [];
for (let element of originalArray) {
    duplicateArray.push(element);
}
console.log(duplicateArray);

//the second version:
duplicateArray = originalArray.slice();
console.log(duplicateArray);
