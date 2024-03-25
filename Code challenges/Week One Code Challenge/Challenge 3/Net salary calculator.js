// Tax rates from KRA//
const TAX_RATES = {
    '0-24000': 0.1,
    '24001-32333': 0.25,
    '32334-40423': 0.3,
    '40424-57196': 0.3,
    '57197+': 0.3
};

// NSSF rate//
const NHIF_RATE = 0.015;
const NSSF_RATE = 0.06;

//Input the individual's basic salary//
function calculateTax(basicSalary) {
    let tax = 0;
    //The basic salary is subjected to the tax bands defined as TAX_RATES//
    for (let range in TAX_RATES) {
        //The function splits the basic salary.It then checks it against the lower and upper limit, converts them to numbers and then checks if the basic salary falls within the range//
        let [lower, upper] = range.split('-').map(Number);
        if (basicSalary >= lower && basicSalary <= upper) {
            //It calculates the tax based on the range and basic salary//
            tax = (basicSalary - lower + 1) * TAX_RATES[range];
            break;
        }
    }
    //The calculated tax is then returned//
    return tax;
}

function calculateNHIF(basicSalary) {
    //The NHIF deduction is calculated as  'basicSalary * NHIF_RATE' and it should not exceed 1700// 
    return Math.min(1700, basicSalary * NHIF_RATE);
}

function calculateNSSF(basicSalary) {
    //The NSSF is calculated as  'basicSalary * NSSF_RATE' and it should not exceed 2000//
    return Math.min(2000, basicSalary * NSSF_RATE);
}

function calculateNetSalary(basicSalary, benefits) {
    //Gross salary is the sumation of basic salary and all the benefits//
    const grossSalary = basicSalary + benefits;
    //To calculate the tax, invoke the calculateTax function//
    const tax = calculateTax(basicSalary);
    //To calculate the nhif, invoke the calculateNHIF function//
    const nhif = calculateNHIF(basicSalary);
    //To calculate the nssf, invoke the calculateNSSF function//
    const nssf = calculateNSSF(basicSalary);
    //Net salary is obtain by subtraction of tax,nhif and nssf from the gross salary//
    const netSalary = grossSalary - tax - nhif - nssf;
    //Display grossSalary, tax, nhif, nssf, netSalary//
    return [grossSalary, tax, nhif, nssf, netSalary];
}

//This function prompt the user to enter basic salary and benefits//
function main() {
    //Prompt the user to input basic salary//
    const basicSalary = parseFloat(prompt("Enter basic salary:"));
    //Prompt the user to input benefits//
    const benefits = parseFloat(prompt("Enter benefits:"));

    const [grossSalary, tax, nhif, nssf, netSalary] = calculateNetSalary(basicSalary, benefits);

    //The individual net salary,tax,deductions and gross salary are then displayed//
    console.log(`Gross Salary: ${grossSalary}`);
    console.log(`TAX (PAYE): ${tax}`);
    console.log(`NHIF Deductions: ${nhif}`);
    console.log(`NSSF Deductions: ${nssf}`);
    console.log(`Net Salary: ${netSalary}`);
}

main();