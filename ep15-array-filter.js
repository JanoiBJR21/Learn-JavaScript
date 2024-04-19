// Array.Filter() => เป็นการคัดกรองทำงานตามเงื่อนไขตามที่เรากำหนด

const data = [10, 20, 30, 40, 50];
const employeeData = [
  { name: "มิว", salary: 25000, department: "โปรแกรมเมอร์" },
  { name: "ปีโป้", salary: 35000, department: "การตลาด" },
  { name: "เบล", salary: 10000, department: "ฝึกงาน" },
  { name: "จอย", salary: 60000, department: "การตลาด" },
  { name: "มีมี่", salary: 10000, department: "ฝึกงาน" },
];

// ต้องการสมาชิกที่มีค่า > 20 ใน Array data
const resultData = data.filter((e) => {
  return e > 20;
});
console.log(resultData); //[ 30, 40, 50 ]

// ต้องทราบสมาชิกที่มีเงินเดือน ตั้งแต่ 25000 ขึ้นไป
const resultSalaryData = employeeData.filter((e) => {
  return e.salary >= 25000;
}).filter(e => e.department === "การตลาด");

// กรณีเงื่อนไขไม่เยอะ สามมารถเขียนในบรรทัดเดียวได้
// const resultSalaryData = employeeData.filter((e) => e.salary >= 25000);
console.log(resultSalaryData);
// [
//   { name: "ปีโป้", salary: 35000, department: "การตลาด" },
//   { name: "จอย", salary: 60000, department: "การตลาด" },
// ];
