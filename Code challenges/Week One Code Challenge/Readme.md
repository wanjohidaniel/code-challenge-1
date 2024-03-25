GRADE CALCULATOR.js
Prompt the user to input the student's mark(ranging between 0 and 100)
The mark is then subjected to an if loop where:
If mark is greater than 79, award A;
If mark is greater than 60 and less than 79, award B;
If mark is greater than 49 and less than 59, award C;
If mark is greater than 39 and less than 49, award C;
Anything below 40 award an E
The results are then displayed:the grade awarded.

SPEED CALCULATOR.JS
Prompt the user to enter the car speed
The specifications of the code are as follows:
The car speed limit to be 70km/h;
If speed is above the speed limit, demerit point per 5 km is 1;
Maximum demerit points to obtain is 12

The speed is then subjected to an if loop where:
If speed is less than the speed limit, display 'Ok';
If speed is higher, perform subtraction of the high speed and the speed limit.Divide the answer by 5 to obtain the nimber of demerit points

The demerit ponts calculated are subjected to an if loop where:
If demerit points are greater than 12, display 'License suspended';
If they are less than 12, Display "Last warning" 

NET SALARY CALCULATOR.JS
The following are defined:
Tax rates from KRA;
NHIF rates from Aren tax rates;
NSSF rate which is 6% of pensionable pay.

The basic salary is then subjected to a function which calaclates the tax charged.The basic salary is subjected to the tax bands defined as TAX_RATES.The function splits the basic salary.It then checks it against the lower and upper limit, converts them to numbers and then checks if the basic salary falls within the range.It calculates the tax based on the range and basic salary.The calculated tax is then returned

The basic salary is then subjected to a function which calaclates the nhif deduction.The NHIF deduction is calculated as  'basicSalary * NHIF_RATE' and it should not exceed 1700

The basic salary is then subjected to a function which calaclates the nssf deduction.The Nssf deduction is calculated as  'basicSalary * NSSF_RATE' and it should not exceed 2000.

The basic salary and benefits are then subjected to a function which calaclates the net salary, where :
Gross salary is the sumation of basic salary and all the benefits;
To calculate the tax, invoke the calculateTax function;
To calculate the nhif, invoke the calculateNHIF function;
To calculate the nssf, invoke the calculateNSSF function;
Net salary is obtain by subtraction of tax,nhif and nssf from the gross salary;
Display grossSalary, tax, nhif, nssf, netSalary.

This main function prompt the user to enter basic salary and benefits
The individual net salary,tax,deductions and gross salary are then displayed.