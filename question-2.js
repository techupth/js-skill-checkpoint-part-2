const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

// เริ่มเขียนโค้ดตรงนี้
let scoreBelow50 = students.filter(item => item.score > 50)
let add10Percent = scoreBelow50.map(item => item.score += item.score * 0.1 ) 
let total = add10Percent.reduce((score,all)=> all + score)





console.log(scoreBelow50);
console.log(add10Percent);
console.log("Total score is",total);