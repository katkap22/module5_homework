let str = 'Hello, world!!?';
let strRevert = '';
for (let i = 0; i < str.length; i++) {
    strRevert += str[[str.length-1] - i];
}

console.log(strRevert);

