"use strict";
var payRate = 17.30;
var hoursWorked = 45;
var regularHours = 40;
var overtimePayrate = payRate * 1.5;
var regularPay = 0;
var overtimePay = 0;
var overtimeHours = 0;
var grossPay = 0;


console.log(grossPay);

overtimeHours = hoursWorked - regularHours

console.log(overtimeHours);
if (hoursWorked <= 40) {
grossPay = payRate * hoursWorked
} else {
regularPay = regularHours * payRate
overtimePay = overtimeHours * overtimePayrate
grossPay =  regularPay + overtimePay
 }







console.log(grossPay);
