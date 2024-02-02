
// Use a for...of loop to concatenate all the elements of an array into a single string.

// Input: let names = ['Tom', 'Tim', 'Tin', 'Tik']

// Output: 'TomTimTinTik'


let names = ['Tom', 'Tim', 'Tin', 'Tik'];
let string = '';
for (let name of names) {
    string += name;
}
console.log(typeof string);
