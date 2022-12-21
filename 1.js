let num = +prompt('Введите значение: ');

if (typeof num === 'number' && !isNaN(num)){
   if (num % 2 === 0) {
        alert('Это значение - четное');
   } else {
       alert('Это значение - нечетное');
   }
} else {
       alert('Упс, кажется, вы ошиблись');
} 