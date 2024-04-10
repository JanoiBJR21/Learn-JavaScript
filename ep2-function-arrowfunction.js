//Arrow Function
//เป็นรูปแบบการเขียน Function ให้มีความกระชับมากยิ่งขึ้น

//Function แบบเดิม
function Fullname(fname, lname) {
  return fname + " " + lname;
}
console.log(Fullname("Apichat", "Wongtala"));

//Arrow Function

//(ไม่ต้องใส่ปีกกา {} หรือ return ก็ได้ ใช้ในกรณีที่มีคำสั่งไม่เยอะ)
const Kullname = (fname, lname) => fname + " " + lname;
console.log(Kullname("JA", "NOI"));

//หรือแบบมีปีกกา {} และ return ก็ได้เช่นกัน
const Aullname = (fname, lname) => {
  return fname + " " + lname;
};
console.log(Aullname("Medo", "Yashi"));

const setAge = (age) => {
  return "Age " + age;
};
console.log(setAge(26));
