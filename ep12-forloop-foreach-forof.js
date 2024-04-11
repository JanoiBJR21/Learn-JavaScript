// การ Loop ข้อมูลใน Array
// ตัวอย่าง 3 แบบ ForLoop , ForEach , ForOf

const data = [10, 20, 30, 40, 50];

// ต้องการแสดงผลสมาชิกแบบไม่วน loop ซึ่งจะต้องเขียนซ้ำ
// console.log(data[0]);//10
// console.log(data[1]);//20
// console.log(data[2]);//30
// console.log(data[3]);//40
// console.log(data[4]);//50

////////////////////////////////////////
// forloop
for (let i = 0; i < data.length; i++) {
  // console.log(data[i]);
  // 10
  // 20
  // 30
  // 40
  // 50

  // แต่งประโยคในการแสดงผล โดยใช้ `${}`
  // console.log(`ลำดับที่ ${i} = ${data[i]}`);
  // ลำดับที่ 0 = 10
  // ลำดับที่ 1 = 20
  // ลำดับที่ 2 = 30
  // ลำดับที่ 3 = 40
  // ลำดับที่ 4 = 50

  // ใช้เงื่อนไขในการ break เมื่อ data[index] มีค่า > หรือ = 50
  if (data[i] >= 50) break;
  console.log(`ลำดับที่ ${i} = ${data[i]}`);
  // ลำดับที่ 0 = 10
  // ลำดับที่ 1 = 20
  // ลำดับที่ 2 = 30
  // ลำดับที่ 3 = 40
}

/////////////////////////////////////////////////
// ForEach : ไม่สามารถใช้ break ได้ แต่ใช่ if ต่างๆได้
let sum = 0;
data.forEach((e) => {
  // console.log(e);
  // 10
  // 20
  // 30
  // 40
  // 50

  // แต่งประโยคในการแสดงผล โดยใช้ `${}`
  //   console.log(`สมาชิกใน Array data = ${e}`);
  // สมาชิกใน Array data = 10
  // สมาชิกใน Array data = 20
  // สมาชิกใน Array data = 30
  // สมาชิกใน Array data = 40
  // สมาชิกใน Array data = 50

  // ใช้เงื่อนไขใน if
  if (e >= 40) {
    // console.log("ค่าที่มากกว่า 30");
    // 40 = ค่าที่มากกว่า 30
    // 50 = ค่าที่มากกว่า 30
  }
  // การหาผลรวมของสมาชิก ในแต่ละรอบ
//   sum += e;
//   console.log(`ผลรวม = ${sum}`);
  // ผลรวม = 10
  // ผลรวม = 30
  // ผลรวม = 60
  // ผลรวม = 100
  // ผลรวม = 150
});

/////////////////////////////////////////////
// ForOf คือการนำ Forloop and ForEach มาเขียนรวมกัน : ใช้ break
for (const element of data) {
    // console.log(`สมาชิกใน Array data = ${element}`);
// สมาชิกใน Array data = 10
// สมาชิกใน Array data = 20
// สมาชิกใน Array data = 30
// สมาชิกใน Array data = 40
// สมาชิกใน Array data = 50

// ใช้เงื่อนไขในการ break เมื่อ data[index] มีค่า > หรือ = 50
  if (element >= 30) break;
  console.log(`สมาชิกใน Array data = ${element}`);
// สมาชิกใน Array data = 10
// สมาชิกใน Array data = 20
// ส่วน Array data ที่มีค่าตั้งแต่ 30 เป็นต้นไปจะไม่แสดงผล เนื่องจากเข้าเงื่อนไข break
}