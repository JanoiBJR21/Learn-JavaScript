// Spread-Operator ใช้ในการกระจายสมาชิกใน Array ออกมาใช้งานโดยเติมเครื่องหมาย ... ด้านหน้าตัวแปร Array

// การนำสมาชิกในตัวแปร newArr มาใส่ในตัวแปร data
const newArr = [100, 200 ,300]
const data1 = [10, 20, newArr]  //ไม่ได้กระจายสมาชิก แต่เป็นการนำมาซ้อยกัน
const data2 = [10, 20, ...newArr]   //ได้กระจายสมาชิก โดยการมาเรียงต่อกัน

console.log(data1);//data1 = [ 10, 20, [ 100, 200, 300 ] ]
console.log(data2);//data2 = [ 10, 20, 100, 200, 300 ]

// การนำสมาชิกในตัวแปร color มาใส่ในตัวแปร allColors
const color = ["เขียว", "น้ำเงิน", "ขาว"]
const allColors1 = ["แดง", "เหลือง", color]
const allColors2 = ["แดง", "เหลือง", ...color]

console.log(allColors1);// allColors1 = [ 'แดง', 'เหลือง', [ 'เขียว', 'น้ำเงิน', 'ขาว' ] ]
console.log(allColors1.length);//3
console.log(allColors2);// allColors2 = [ 'แดง', 'เหลือง', 'เขียว', 'น้ำเงิน', 'ขาว' ]
console.log(allColors2.length);// 5


// การนำสมาชิกในตัวแปร newColors เพื่อเพิ่มสมาชิกต่อท้ายในตัวแปร allColors2 โดยการใช้ .push()
const newColors = ["ดำ", "เทา"]
// allColors2.push(newColors)//[ 'แดง', 'เหลือง', 'เขียว', 'น้ำเงิน', 'ขาว', [ 'ดำ', 'เทา' ] ]
allColors2.push(...newColors)
console.log(allColors2);// ['แดง',  'เหลือง', 'เขียว', 'น้ำเงิน', 'ขาว',  'ดำ', 'เทา' ]