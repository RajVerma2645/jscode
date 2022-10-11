<<<<<<< HEAD
/*Last date for fee submission is over and now late fine will be incurred, so you are assigned the
 job to build a late fine calculator for a coaching institution:
• fine 5% if the fee value is between 50 and 300
• fine 10% if the fee value is higher
*/

const lateFineCalculator = function (feeValue) {
    if (feeValue < 50 )  // Fee should not be less than 50 as it is the min fees
        return "Invalid value Input"
    let lateFine = (feeValue >= 50 && feeValue < 100)? fine=5 : fine =10;  //if fees is between 50 & 100, then 
                                                                             // fine % = 5, else fine % 10
    return lateFine = ((feeValue*fine)/100)+feeValue 
}

const lateFine = lateFineCalculator(3000);
if (typeof lateFine != "string")            //if return value is not string then print latefine and value
console.log("Total fee payable incl Fine = $", lateFine)
else 
=======
/*Last date for fee submission is over and now late fine will be incurred, so you are assigned the
 job to build a late fine calculator for a coaching institution:
• fine 5% if the fee value is between 50 and 300
• fine 10% if the fee value is higher
*/

const lateFineCalculator = function (feeValue) {
    if (feeValue < 50 )  // Fee should not be less than 50 as it is the min fees
        return "Invalid value Input"
    let lateFine = (feeValue >= 50 && feeValue < 100)? fine=5 : fine =10;  //if fees is between 50 & 100, then 
                                                                             // fine % = 5, else fine % 10
    return lateFine = ((feeValue*fine)/100)+feeValue 
}

const lateFine = lateFineCalculator(3000);
if (typeof lateFine != "string")            //if return value is not string then print latefine and value
console.log("Total fee payable incl Fine = $", lateFine)
else 
>>>>>>> 30b670ba841612324e1694ac7c936fa1af1c50c7
console.log(lateFine)                       // else Print Invalid input