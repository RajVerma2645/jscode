function calculateTakeHomeSalary(totalIncome,taxRate){
//function calculateTakeHomeSalary(totalIncome,taxRate=30-> Default value assigned if user not passed the value
//This will also be used if user passes undefined values 
if (!taxRate){       // To check whether tax rate has been passed by user or not
taxRate=30;}

totalTax=(totalIncome*taxRate)/100
TakeHomeSalary=totalIncome-totalTax
console.log(TakeHomeSalary)
}


calculateTakeHomeSalary(100000,20)
calculateTakeHomeSalary(200000)

