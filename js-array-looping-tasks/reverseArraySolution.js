const colors = ["red", "blue", "green", "yellow", "orange"];

revColors = [];
for (const color of colors) {
  revColors.unshift(color);
}

console.log(revColors);
// for loop
revForColors=[];
for (i = 0; i < colors.length; i++) {
    const col = colors[i];
    revForColors.unshift(col);
}
console.log(revForColors);

// decremental for loop
const revDecCol = [];
for(let i = colors.length - 1 ; i >= 0 ; i--){
    const reverseCol = colors[i];
    console.log(reverseCol);
    revDecCol.push(reverseCol);
}
console.log(revDecCol);