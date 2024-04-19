// Array Reduce

const data = [10, 20, 30, 40];
console.log(data); //[ 10, 20, 30, 40 ]

const mapData = data.map((e) => 100);
console.log(mapData); //[ 100, 100, 100, 100 ]

const filterData = data.filter((e) => e > 20);
console.log(filterData); //[ 30, 40 ]

// array.reduce((ค่าที่ถูกประมวลผล, e)=>{},ค่าเริ่มต้น) // value = 0
// ต้องการหาผลรวมสมาชิกใน Array data
//1. value = 0
//2. value = 10
//3. value = 30
//4. value = 60

//1. total = 10+0
//2. total = 20+10
//3. total = 30+30
//4. total = 40+60
// total = 100
const sumData = data.reduce((value, e) => {
    // console.log(value);
    // 0
    // 10
    // 30
    // 60
  const total = e + value;
  return total;
}, 0);
console.log(sumData); //100

// กรณีเงื่อนไขไม่เยอะ สามมารถเขียนในบรรทัดเดียวได้
const sumData1 = data.reduce((value, e) => e + value, 0)
console.log(sumData1);//100

///////////////////////////////////////////////
// ต้องการทราบผลรวมราคาสินค้าทั้งหมด
//1. value = 0
//2. value = 1500
//3. value = 1700

//1. total = 1500+0
//2. total = 200+1500
//3. total = 15000+1700
// total = 16700
const cartData = [
    {name: "กระเป๋า", price: 1500},
    {name: "หนังสือ", price: 200},
    {name: "กล้องถ่ายรูป", price: 15000},
]
const sumCartData = cartData.reduce((value, e)=>{
    const total = e.price + value
    return total
},0)
console.log(sumCartData);//16700

// กรณีเงื่อนไขไม่เยอะ สามมารถเขียนในบรรทัดเดียวได้
const sumCartData1 = cartData.reduce((value, e) => e.price + value, 0)
console.log(`ลูกค้าต้องชำระเงิน = ${sumCartData1} บาท`);
// ลูกค้าต้องชำระเงิน = 16700 บาท
