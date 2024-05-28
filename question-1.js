const techupPeople = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 16 },
];

const techcoolPeople = [
  { name: "David", age: 25 },
  { name: "Eve", age: 19 },
];

const allPeople = [];

// เริ่มเขียนโค้ดตรงนี้
allPeople.push(...techupPeople,...techcoolPeople)
let below20 = allPeople.filter(item => item.age < 20)

console.log(allPeople);
console.log(below20);