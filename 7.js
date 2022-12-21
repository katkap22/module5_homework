let arr = [10, 0, true, 5, 0, 87, 99, 0, -22, 'sldfjsldkf', null, NaN];

let even = 0;
let odd = 0;
let nullEl = 0;

arr.forEach((item, index)=> {
  if (typeof item === 'number' && !isNaN(item)){
     if (item === 0){
         nullEl++;
     } else if (item % 2 === 0) {
         even++;
     } else odd++;
  }
})
console.log(`Количество четных элементов - ${even}, количество нечетных элементов - ${odd}.`);
console.log(`Количество нулевых элементов - ${nullEl}`);