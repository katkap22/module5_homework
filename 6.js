let arr = [2, 2,  2, 2];

let res = true; 
for (let i = 1; i < arr.length; i++) {
  if (arr[0] !== arr[i]){
   res = false;
   break;
  } 
}
console.log(res);