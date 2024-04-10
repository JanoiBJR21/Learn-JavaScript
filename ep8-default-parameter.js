// Deffault Parameter คือ การกำหนดค่าเริ่มต้นให้กับตัว Parameter ที่อยู่ใน Function ของเรา

// แบบเดิม
getDataCustomer = (customerName, customerAddress) => {
  // การใช้เงื่อนไขมาช่วยเช็ค
  if (!customerAddress) {
    customerAddress = "กรุงเทพมหานคร"; //กำหนดค่าเริ่มต้น
  }
  const address = `ชื่อลูกค้า : ${customerName}
    ที่อยู่ : ${customerAddress}`;
  return address;
};
console.log(getDataCustomer("นายอภิชาติ วงตะลา", "อุบลราชธานี"));
// ชื่อลูกค้า : นายอภิชาติ วงตะลา
// ที่อยู่ : อุบลราชธานี
console.log(getDataCustomer("เด็กชายโตโต้")); // ถ้าไม่กำหนด customerAddress จะเข้าเงื่อนไข if และถูกกำหนด customerAddress เป็น กรุงเทพมหานคร
// ชื่อลูกค้า : เด็กชายโตโต้
// ที่อยู่ : กรุงเทพมหานคร

////////////////////// Deffault Parameter //////////////////////////////////
// การใช้งาน Deffault Parameter
getDataCustomer = (customerName, customerAddress = "กรุงเทพมหานคร") => {
  const address = `ชื่อลูกค้า : ${customerName}
        ที่อยู่ : ${customerAddress}`;
  return address;
};
console.log(getDataCustomer("นายอภิชาติ วงตะลา"));// ถ้าไม่กำหนด customerAddress จะเข้าเงื่อนไข if และถูกกำหนด customerAddress เป็น กรุงเทพมหานคร
// ชื่อลูกค้า : นายอภิชาติ วงตะลา
// ที่อยู่ : กรุงเทพมหานคร
console.log(getDataCustomer("เด็กชายโตโต้","นครนายก"));
// ชื่อลูกค้า : เด็กชายโตโต้
// ที่อยู่ : นครนายก
