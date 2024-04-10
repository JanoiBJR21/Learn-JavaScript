// Rest Parameter ใช้ในการส่งค่า Parameter เข้าไปทำงานใน Function โดยไม่จำกัดจำนวน โดยใช้เครื่องหมาย ...

// การหาผลรวมของตัวเลข 2 จำนวน
const summation1 = (x, y) => {
  return x + y;//50+100 //500+100
};
// การหาผลรวมของตัวเลข 3 จำนวน
const summation2 = (x, y, z) => {
    return x + y + z;
  };
console.log(summation1(50, 100));// 150
console.log(summation1(500, 100));// 600

console.log(summation2(500, 1000, 500));// 2000

// การระบุ Parameter ให้เป็น Array
const summation3 = (...numberArr) => {//500, 1000
    let total = 0
    for(let numer of numberArr) total += numer //0 + 500 + 1000
    return total //1500//1200//2800
  };
  console.log(summation3(500, 1000));
  console.log(summation3(500, 1000, 800));
  console.log(summation3(500, 1000, 800, 500));