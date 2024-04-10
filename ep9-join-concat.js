// การทำงานกับ Array
// ตัวอย่างการใช้ฟังก์ชัน join , concat

const data1 = [100, 200, 300]//Array
const data2 = [400, 500, 600]//Array

console.log(data1);//[ 100, 200, 300 ]
console.log(data1.join("||"));//เป็นการเปลี่ยนเครื่องหมายขั้นระหว่างสมาชิก = 100||200||300 

// ฟังก์ชัน join เป็นการแปลง Array ให้เป็น String
const result = data1.join()//แปลงเป็น String
console.log(result);//100,200,300

// ฟังก์ชัน concat เป็นการต่อสมาชิกใน Array
const allData = data1.concat(data2)
console.log(allData);//[ 100, 200, 300, 400, 500, 600 ]