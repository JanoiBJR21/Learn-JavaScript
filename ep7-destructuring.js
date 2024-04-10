// destructuring คือการกำหนดค่าที่อยู่ใน Array หรือ Object ให้กับตัวแปร โดยใช้วิธีการจับคู่ตัวแปร กับ ค่าใน Array หรือ Object

// เช่น
const color1 = ["ขาว", "แดง"];
const a = color1[0]; //a = ขาว
const b = color1[1]; //b = แดง

// กาใช้งาน destructuring
const color2 = ["ขาว", "แดง"];
const [aa, bb] = color2;

////////////////// Array /////////////////////
// กาใช้งาน destructuring ในรูปแบบ Array

// กาใช้งาน destructuring แบบดั้งเดิม
const colors = ["เขียว", "แดง", "เหลือง"];
// const green = colors[0]
// const red = colors[1]
// const yellow = colors[2]

const [green, red, yellow] = colors; // กาใช้งาน destructuring

// ถ้าต้องการแค่ yellow
// const [,, yellow] = colors

// ถ้าต้องการแค่ green , yellow
// const [green, , yellow] = colors

console.log(green);
console.log(red);
console.log(yellow);

///////////////// Object //////////////////////
// กาใช้งาน destructuring ในรูปแบบ Object
const product = {
  productName: "computer",
  price: 32000,
  stock: 10,
};
// console.log("productName : " + product.productName);
// console.log("price : " + product.price);
// console.log("stock : " + product.stock);

// กาใช้งาน destructuring แบบดั้งเดิม
// const productName = product.productName
// const price = product.price
// const stock = product.stock

// const { productName: productName, price: price, stock: stock } = product; // กาใช้งาน destructuring

const { productName, price, stock } = product; // กาใช้งาน destructuring กรณีชื่อเหมือนกัน

console.log("productName : " + productName);
console.log("price : " + price);
console.log("stock : " + stock);
