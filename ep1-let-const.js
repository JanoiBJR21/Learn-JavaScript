//Block Scope (let/constant)

//การเขียนแบบเดิม

// let x = 10
// let y = 50
// if (x===10){
//     let y = 500
//     console.log("y ใน = "+ y);
// }
// console.log("y นอก = "+ y);

//let ตัวแปรแทนค่าได้

let y = 50
y = 100 //
console.log("y แทนค่าจาก 50 เป็น" +y);

//const ตัวแปรค่าคงที่

const x = 50
// x = 100 //จะแทนค่าไม่ได้
console.log("x ค่าคงที่เป็น " +x);