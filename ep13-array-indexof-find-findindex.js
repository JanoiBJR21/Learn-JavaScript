// ค้นหาข้อมูลใน Array
// ยกตัวอย่างมา 3 รูปแบบ เช่น
// 1. indexOf(ข้อมูล)   => ผลการค้นหาจะได้ตำแหน่ง Index ที่ค้นเจอ ถ้าค้นไม่เจอจะได้ -1
// 2. find(ข้อมูล)      => ผลการค้นหาจะได้ข้อมูลที่ค้นเจอ ถ้าค้นไม่เจอจะได้ undefined
// 3. findIndex(ข้อมูล) => ผลการค้นหาจะได้ตำแหน่ง Index ที่ค้นเจอ ถ้าค้นไม่เจอจะได้ -1

const colors = ["แดง", "เขียว", "น้ำเงิน", "ม่วง", "ขาว"];
console.log(colors); //[ 'แดง', 'เขียว', 'น้ำเงิน', 'ม่วง', 'ขาว' ]

////////////////////////////////////////////////////
// 1. indexOf(ข้อมูล) => ผลการค้นหาจะได้ตำแหน่ง Index ที่ค้นเจอ ถ้าค้นไม่เจอจะได้ -1
const index = colors.indexOf("น้ำเงิน");
console.log(index); //2

// const index = colors.indexOf("ดำ")
// console.log(index);//-1

///////////////////////////////////////////////////////
// 2. find(ข้อมูล) => ผลการค้นหาจะได้ข้อมูลที่ค้นเจอ ถ้าค้นไม่เจอจะได้ undefined
const searchFine = colors.find((element) => element === "เขียว");
console.log(searchFine);//เขียว

// const searchFine = colors.find((element) => element === "เหลือง");
// console.log(searchFine);//undefined

///////////////////////////////////////////////////////
// 3. findIndex(ข้อมูล) => ผลการค้นหาจะได้ตำแหน่ง Index ที่ค้นเจอ ถ้าค้นไม่เจอจะได้ -1
const searchFineIndex = colors.findIndex((element) => element === "เขียว");
console.log(searchFineIndex);//1

// const searchFineIndex = colors.findIndex((element) => element === "ฟ้า");
// console.log(searchFineIndex);//-1