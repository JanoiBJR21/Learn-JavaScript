//การทำงานกับ Object

//ตัวแปรเก็บข้อมูล
const username = "Apichat";
const age = 25;
const address = "Thailand";

const customer1 = {
  customerName: "Ja",
  age: 26,
  address: "Thailand",
};
console.log(customer1);

//การดึงเอาตัวแปร ที่เก็บข้อมูลมาใช้
const customer2 = {
  customerName: username,
  age: age,
  address: address,
};
console.log(customer2);

//ถ้าตัวแปร กับ propert มีชื่อเหมือนกัน เช่นในที่นี้ age and address สามารถเขียนได้ดังนี้
const customer3 ={
    customerName : username,
    age,
    address
}
console.log(customer3);

//การใช้ method ภายใน Object
const customer4 ={
  customerName : username,
  age,
  address,
  showData(){
    console.log("ข้อมูลลูกค้าชื่อว่า = " + username);
  }
}
customer4.showData()