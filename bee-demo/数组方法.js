let arr = [...new Set(['2018-03-05', '2013-06-12','2019-03-12','2018-03-05','2014-02-22'])]
  .sort((a, b) => a < b ? -1 : 1);
console.log(arr);

console.log([...new Set(['5','3','7','3', '1'])].sort((a, b) => a - b));

var items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic' },
  { name: 'Zeros', value: 37 }
];

var sortedItem = items.sort(function(a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  // names must be equal
  return 0;
});
console.log(sortedItem);

function sum(...arr) {
  return arr.reduce((acc, item) => {
    return acc + item
  })
}
function sum2() {
  return Array.from(arguments).reduce((acc, item) => {
    return acc + item
  })
}
console.log(sum(2, 3))
console.log(sum(2, 3, 4, 5))