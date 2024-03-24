function calculateNetSalary(basicSalary, benefits){
    // Constants for tax rates and deductions for Kenya
    const PAYEE_RATE = {
        tier1: 0.1, 
        tier2: 0.25,
        tier3: 0.3, 
        tier4: 0.32, 
        tier5: 0.35, 
        tier6: 0.4, 
        tier7: 0.45, 
    };

    const NHIF_DEDUCTION = 1700; // NHIF monthly deduction 
    const NSSF_DEDUCTION = 200; // NSSF monthly deduction 

    // Calculate gross salary
    const grossSalary = basicSalary + benefits;

    // Calculate PAYE
    let payee = 0;
    if (grossSalary <= 24000) {
        payee = grossSalary * PAYEE_RATE.tier1;
    } else if (grossSalary <= 40000) {
        payee = (24000 * PAYEE_RATE.tier1) + ((grossSalary - 24000) * PAYEE_RATE.tier2);
    } else if (grossSalary <= 80000) {
        payee = (24000 * PAYEE_RATE.tier1) + (16000 * PAYEE_RATE.tier2) + ((grossSalary - 40000) * PAYEE_RATE.tier3);
    } else if (grossSalary <= 180000) {
        payee = (24000 * PAYEE_RATE.tier1) + (16000 * PAYEE_RATE.tier2) + (40000 * PAYEE_RATE.tier3) + ((grossSalary - 80000) * PAYEE_RATE.tier4);
    } else if (grossSalary <= 324000) {
        payee = (24000 * PAYEE_RATE.tier1) + (16000 * PAYEE_RATE.tier2) + (40000 * PAYEE_RATE.tier3) + (100000 * PAYEE_RATE.tier4) + ((grossSalary - 180000) * PAYEE_RATE.tier5);
    } else if (grossSalary <= 576000) {
        payee = (24000 * PAYEE_RATE.tier1) + (16000 * PAYEE_RATE.tier2) + (40000 * PAYEE_RATE.tier3) + (100000 * PAYEE_RATE.tier4) + (144000 * PAYEE_RATE.tier5) + ((grossSalary - 324000) * PAYEE_RATE.tier6);
    } else {
        payee = (24000 * PAYEE_RATE.tier1) + (16000 * PAYEE_RATE.tier2) + (40000 * PAYEE_RATE.tier3) + (100000 * PAYEE_RATE.tier4) + (144000 * PAYEE_RATE.tier5) + (252000 * PAYEE_RATE.tier6) + ((grossSalary - 576000) * PAYEE_RATE.tier7);
    }

    // Calculate net salary after PAYEE tax deduction
    let netSalary = grossSalary - payee;

    // Deduct NHIF and NSSF deductions
    netSalary -= NHIF_DEDUCTION;
    netSalary -= NSSF_DEDUCTION;

    return {
        grossSalary,
        payee,
        NHIF_DEDUCTION,
        NSSF_DEDUCTION,
        netSalary
    };
}

// Example usage:
const basicSalary = 100000; 
const benefits = 5000; 
const {
    grossSalary,
    payee,
    NHIF_DEDUCTION,
    NSSF_DEDUCTION,
    netSalary
} = calculateNetSalary(basicSalary, benefits);

console.log("Gross Salary:", grossSalary);
console.log("PAYEE (Tax):", payee);
console.log("NHIF Deduction:", NHIF_DEDUCTION);
console.log("NSSF Deduction:", NSSF_DEDUCTION);
console.log("Net Salary:", netSalary);