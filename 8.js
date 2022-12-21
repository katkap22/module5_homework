let myMap = new Map();

myMap.set('key', 'apple');
myMap.set(1, 'orange');
myMap.set(true, 123);
myMap.set(2, true);
myMap.set(46, 'lastValue');

myMap.keys(); // Получение всех ключей

for (let elem of myMap) {
  console.log(`Ключ - ${elem[0]}, значение - ${elem[1]}`);
}